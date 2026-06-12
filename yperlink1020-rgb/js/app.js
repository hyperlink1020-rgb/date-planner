// Date Planner App

class DatePlannerApp {
    constructor() {
        this.dates = [];
        this.currentDate = new Date();
        this.defaultPhone = '';
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.renderCalendar();
        this.renderDatesList();
        this.loadDefaultPhone();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('addDateBtn').addEventListener('click', () => this.addDate());
        
        // Calendar navigation
        document.getElementById('prevMonth').addEventListener('click', () => this.previousMonth());
        document.getElementById('nextMonth').addEventListener('click', () => this.nextMonth());
        
        // Settings
        document.getElementById('savePhone').addEventListener('click', () => this.saveDefaultPhone());
        
        // Enter key for date title
        document.getElementById('titleInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addDate();
        });
    }

    addDate() {
        const dateInput = document.getElementById('dateInput').value;
        const titleInput = document.getElementById('titleInput').value;
        const categorySelect = document.getElementById('categorySelect').value;
        const descriptionInput = document.getElementById('descriptionInput').value;
        let phoneInput = document.getElementById('phoneInput').value || this.defaultPhone;

        // Validation
        if (!dateInput || !titleInput || !categorySelect) {
            alert('Please fill in all required fields!');
            return;
        }

        const newDate = {
            id: Date.now(),
            date: dateInput,
            title: titleInput,
            category: categorySelect,
            description: descriptionInput,
            phone: phoneInput
        };

        this.dates.push(newDate);
        this.dates.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Clear form
        this.clearForm();
        
        // Save and render
        this.saveToStorage();
        this.renderCalendar();
        this.renderDatesList();
        
        // Show notification
        this.showNotification('Date added successfully! 💕');
    }

    deleteDate(id) {
        if (confirm('Are you sure you want to delete this date?')) {
            this.dates = this.dates.filter(d => d.id !== id);
            this.saveToStorage();
            this.renderCalendar();
            this.renderDatesList();
            this.showNotification('Date deleted! 😢');
        }
    }

    renderCalendar() {
        const calendar = document.getElementById('calendar');
        const monthYear = document.getElementById('monthYear');
        
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Update month/year display
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];
        monthYear.textContent = `${monthNames[month]} ${year}`;
        
        // Clear calendar
        calendar.innerHTML = '';
        
        // Add day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-header';
            header.textContent = day;
            header.style.fontWeight = 'bold';
            header.style.textAlign = 'center';
            header.style.paddingBottom = '10px';
            header.style.color = 'var(--text-light)';
            calendar.appendChild(header);
        });
        
        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        
        // Previous month's days
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPrevMonth - i;
            this.createDayElement(calendar, day, month - 1, year, true);
        }
        
        // Current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            this.createDayElement(calendar, day, month, year, false);
        }
        
        // Next month's days
        const totalCells = calendar.children.length - 7; // Subtract header row
        const remainingCells = 42 - totalCells;
        for (let day = 1; day <= remainingCells; day++) {
            this.createDayElement(calendar, day, month + 1, year, true);
        }
    }

    createDayElement(calendar, day, month, year, isOtherMonth) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        
        if (isOtherMonth) {
            dayEl.classList.add('other-month');
        }
        
        // Check if today
        const today = new Date();
        if (!isOtherMonth && day === today.getDate() && 
            month === today.getMonth() && year === today.getFullYear()) {
            dayEl.classList.add('today');
        }
        
        // Check if has date
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (this.dates.some(d => d.date === dateStr)) {
            dayEl.classList.add('has-date');
        }
        
        dayEl.textContent = day;
        calendar.appendChild(dayEl);
    }

    renderDatesList() {
        const datesList = document.getElementById('datesList');
        datesList.innerHTML = '';
        
        if (this.dates.length === 0) {
            datesList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🐱</div>
                    <h3>No dates planned yet!</h3>
                    <p>Start by adding a special date for your girlfriend 💕</p>
                </div>
            `;
            return;
        }
        
        this.dates.forEach(date => {
            const card = this.createDateCard(date);
            datesList.appendChild(card);
        });
    }

    createDateCard(date) {
        const card = document.createElement('div');
        card.className = 'date-card';
        
        const categoryEmojis = {
            'dinner': '🍽️',
            'movie': '🎬',
            'adventure': '🏔️',
            'picnic': '🧺',
            'travel': '✈️',
            'gift': '🎁',
            'anniversary': '💍',
            'other': '✨'
        };
        
        const categoryNames = {
            'dinner': 'Dinner',
            'movie': 'Movie Night',
            'adventure': 'Adventure',
            'picnic': 'Picnic',
            'travel': 'Travel',
            'gift': 'Gift Exchange',
            'anniversary': 'Anniversary',
            'other': 'Other'
        };
        
        const emoji = categoryEmojis[date.category] || '✨';
        const categoryName = categoryNames[date.category] || date.category;
        
        const dateObj = new Date(date.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
        
        card.innerHTML = `
            <div class="date-card-header">
                <h3>${date.title}</h3>
                <span class="category-badge">${emoji} ${categoryName}</span>
            </div>
            <div class="date-card-date">📅 ${formattedDate}</div>
            ${date.description ? `<div class="date-card-description">${this.escapeHtml(date.description)}</div>` : ''}
            ${date.phone ? `<div class="date-card-phone">📱 ${date.phone}</div>` : ''}
            <div class="date-card-actions">
                <button class="btn btn-delete" onclick="app.deleteDate(${date.id})">Delete 🗑️</button>
            </div>
        `;
        
        return card;
    }

    previousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.renderCalendar();
    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.renderCalendar();
    }

    clearForm() {
        document.getElementById('dateInput').value = '';
        document.getElementById('titleInput').value = '';
        document.getElementById('categorySelect').value = '';
        document.getElementById('descriptionInput').value = '';
        document.getElementById('phoneInput').value = '';
    }

    saveDefaultPhone() {
        const phone = document.getElementById('defaultPhone').value;
        if (phone && !this.validatePhone(phone)) {
            alert('Please enter a valid phone number');
            return;
        }
        this.defaultPhone = phone;
        localStorage.setItem('defaultPhone', phone);
        this.showNotification('Default phone number saved! 📱');
    }

    loadDefaultPhone() {
        this.defaultPhone = localStorage.getItem('defaultPhone') || '';
        document.getElementById('defaultPhone').value = this.defaultPhone;
    }

    validatePhone(phone) {
        // Basic phone validation
        const cleaned = phone.replace(/\D/g, '');
        return cleaned.length >= 10;
    }

    saveToStorage() {
        localStorage.setItem('plannerDates', JSON.stringify(this.dates));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('plannerDates');
        this.dates = stored ? JSON.parse(stored) : [];
        this.dates.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    showNotification(message) {
        // Simple notification (can be enhanced with toast library)
        console.log(message);
        // You can add a toast notification library here for better UX
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new DatePlannerApp();
});
