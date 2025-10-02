# Getting Started with TurboCASH 6

Welcome to TurboCASH 6! This guide will help you get up and running with the application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [First Steps](#first-steps)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Modern Web Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+
- **Node.js**: Version 14.0.0 or higher (for development server)
- **Text Editor**: VS Code, Sublime Text, or your preferred editor

To check your Node.js version:
```bash
node --version
```

## Installation

### Option 1: Using the Repository

1. Clone the repository:
```bash
git clone https://github.com/philipdc/turbocash6.git
cd turbocash6
```

2. That's it! No dependencies to install for basic usage.

### Option 2: Download as ZIP

1. Download the latest release from GitHub
2. Extract the ZIP file
3. Navigate to the extracted folder

## Running the Application

### Method 1: Development Server (Recommended)

Start the built-in development server:

```bash
npm start
# or
node server.js
```

Then open your browser and navigate to:
```
http://localhost:3000
```

### Method 2: Direct File Access

Simply open the `public/index.html` file in your web browser:

```bash
# On macOS
open public/index.html

# On Linux
xdg-open public/index.html

# On Windows
start public/index.html
```

**Note**: Some features may not work correctly when opening files directly due to browser security restrictions. Using the development server is recommended.

### Method 3: Using Python's Built-in Server

If you have Python installed:

```bash
# Python 3
cd public
python -m http.server 3000

# Python 2
cd public
python -m SimpleHTTPServer 3000
```

## Project Structure

```
turbocash6/
├── public/              # Public web files
│   ├── index.html      # Main entry point
│   ├── css/            # Stylesheets
│   │   ├── main.css
│   │   └── components.css
│   ├── js/             # JavaScript files
│   │   └── main.js
│   ├── images/         # Images and icons
│   └── fonts/          # Custom fonts
├── src/                # Source code (for future development)
│   ├── components/     # Reusable UI components
│   ├── modules/        # Feature modules
│   ├── services/       # API and data services
│   └── utils/          # Helper functions
├── docs/               # Documentation
├── tests/              # Test files
├── SPEC.html           # Technical specification
├── CONTRIBUTING.md     # Contribution guidelines
├── README.md           # Project overview
├── LICENSE             # MIT License
├── package.json        # Project metadata
└── server.js           # Development server
```

## First Steps

### 1. Explore the Dashboard

After opening the application, you'll see the dashboard with:
- Financial statistics cards
- Recent transactions table
- Quick action buttons

### 2. Navigate the Interface

Use the sidebar menu to access different sections:
- **Dashboard**: Overview of your financial data
- **Accounts**: Manage chart of accounts
- **Transactions**: Record and view transactions
- **Reports**: Generate financial reports
- **Settings**: Configure preferences

### 3. Understand the Specification

Open `SPEC.html` in your browser to view the complete technical specification, including:
- Feature descriptions
- Data models
- API endpoints (planned)
- Architecture details

## Customization

### Changing Colors

Edit `public/css/main.css` and modify the CSS variables:

```css
:root {
  --primary-color: #3498db;  /* Change to your brand color */
  --secondary-color: #2ecc71;
  /* ... other variables */
}
```

### Adding Your Logo

Replace the text logo in `public/index.html`:

```html
<div class="header__brand">
  <img src="images/logo.png" alt="TurboCASH 6" class="header__logo">
  <!-- or keep the text logo -->
</div>
```

## Development Tips

### Browser Developer Tools

Use browser developer tools to:
- Inspect elements
- Debug JavaScript
- Monitor network requests
- Test responsive design

Open developer tools:
- **Chrome/Edge**: F12 or Ctrl+Shift+I (Cmd+Option+I on Mac)
- **Firefox**: F12 or Ctrl+Shift+I (Cmd+Option+I on Mac)
- **Safari**: Cmd+Option+I (enable Developer menu first)

### Live Reload

For a better development experience, consider using a tool like:
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (VS Code extension)
- [Browsersync](https://browsersync.io/)

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, specify a different port:

```bash
PORT=8080 node server.js
```

### Styles Not Loading

If CSS styles aren't loading:
1. Check browser console for errors
2. Verify file paths are correct
3. Clear browser cache (Ctrl+Shift+Delete)
4. Ensure you're using the development server

### JavaScript Not Working

If interactive features don't work:
1. Open browser console and check for errors
2. Ensure JavaScript is enabled in your browser
3. Check that `main.js` is loading correctly
4. Verify file paths in HTML

### Browser Compatibility

TurboCASH 6 requires a modern browser. If you experience issues:
- Update your browser to the latest version
- Try a different modern browser
- Check the browser console for specific errors

## Next Steps

- Read the [Contributing Guide](../CONTRIBUTING.md) to learn how to contribute
- Review the [Technical Specification](../SPEC.html) for detailed architecture
- Check out the [Issues](https://github.com/philipdc/turbocash6/issues) to see what's being worked on

## Getting Help

- **Documentation**: Check the `docs/` folder
- **Issues**: [GitHub Issues](https://github.com/philipdc/turbocash6/issues)
- **Discussions**: [GitHub Discussions](https://github.com/philipdc/turbocash6/discussions)

## What's Next?

Now that you have TurboCASH 6 running:

1. **Explore the UI**: Click around and familiarize yourself with the interface
2. **Read the Spec**: Review SPEC.html to understand the planned features
3. **Start Contributing**: Check CONTRIBUTING.md to learn how to contribute
4. **Report Issues**: Found a bug? Open an issue on GitHub

---

Happy accounting! 🚀
