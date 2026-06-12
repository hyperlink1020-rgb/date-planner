# 💕 Date Planner - Our Special Moments

A cute, romantic date planner website for planning and tracking special dates with your loved one. Built with ❤️ and adorned with cute kitten graphics!

## 🌟 Features

- **📅 Calendar View**: Beautiful calendar to visualize your planned dates
- **🏷️ Category Selection**: Organize dates by type (Dinner, Movie, Adventure, etc.)
- **📱 Phone Number Input**: Save phone numbers for SMS notifications
- **🎨 Mosaic Pink Design**: Romantic, cute color scheme with lovely rose pink tones
- **🐱 Cute Kitten Graphics**: Adorable kitten images throughout the site
- **💾 Local Storage**: Dates are saved in your browser automatically
- **📋 Upcoming Dates List**: View all your planned dates in card format
- **⚙️ Settings**: Set a default phone number for notifications

## 🎨 Design Features

- Soft mosaic pink color palette
- Cute kitten images for visual appeal
- Responsive design that works on desktop and mobile
- Smooth animations and transitions
- Card-based date display with category badges
- Interactive calendar with hover effects

## 💻 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Local Storage**: Data persistence in the browser

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hyperlink1020-rgb/date-planner.git
cd date-planner
```

2. Open `index.html` in your web browser
```bash
# On macOS
open index.html

# On Windows
start index.html

# Or simply double-click the file
```

### Deployment

**GitHub Pages:**
1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select `main` branch as source
4. Your site will be available at: `https://hyperlink1020-rgb.github.io/date-planner/`

**Netlify:**
1. Connect your GitHub repository
2. Set build settings to deploy from `main` branch
3. Deploy!

**Vercel:**
1. Import your GitHub repository
2. Click Deploy
3. Your site will be live instantly

## 📖 Usage

### Adding a Date
1. Fill in the date using the date picker
2. Enter the date title (e.g., "Romantic Dinner")
3. Select a category (Dinner, Movie, Adventure, etc.)
4. Add a description (optional)
5. Enter a phone number for SMS notifications (or leave blank)
6. Click "Add Date ✨"

### Managing Dates
- **View Calendar**: Use the calendar to see which days have planned dates
- **Navigate Months**: Use the arrow buttons to browse different months
- **Delete Dates**: Click the delete button on any date card
- **Set Default Phone**: Go to Settings and save your default phone number

### Data Storage
- All dates are automatically saved to your browser's local storage
- Data persists even after closing the browser
- To backup: Export your data (manual copy-paste from browser console)
- To clear all data: Clear your browser's local storage or use the reset button

## 🎯 Future Enhancements

- [ ] SMS notification integration (Twilio API)
- [ ] Email reminders
- [ ] Date editing functionality
- [ ] Photo upload for dates
- [ ] Shared calendar with QR code
- [ ] Dark mode
- [ ] Date ideas suggestions
- [ ] Budget tracker for dates
- [ ] Reminder notifications (browser notifications)
- [ ] Export to PDF
- [ ] Backend sync across devices

## 💕 Customization

### Change Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-pink: #FFB6D9;
    --dark-pink: #FF69B4;
    --light-pink: #FFE4F0;
    --pale-pink: #FFF0F5;
    /* ... more colors ... */
}
```

### Change Kitten Images
Replace the image URLs in `index.html` and `js/app.js`:

```html
<img src="https://your-image-url.jpg" alt="Cute kitten">
```

### Add More Categories
Edit the categories in the `<select>` element in `index.html` and add corresponding emojis in `js/app.js`

## 📱 Phone Number Format

Supported formats:
- `+1 (555) 123-4567`
- `1-555-123-4567`
- `5551234567`
- `+1 555 123 4567`

## 🐛 Troubleshooting

### Dates not saving?
- Check if local storage is enabled in your browser
- Clear browser cache and try again
- Try a different browser

### Images not loading?
- Check your internet connection
- The images are loaded from Unsplash, which requires internet access
- You can download images and host them locally if needed

### Phone number not validating?
- Ensure you enter at least 10 digits
- Use standard phone number format

## 📄 License

This project is open source and available under the MIT License.

## 💌 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 🙏 Credits

- Kitten images from Unsplash
- Fonts from system defaults (Segoe UI, Tahoma)
- Built with love for special moments 💕

---

**Made with 💕 for your special moments**

Enjoy planning your dates! 🐱✨