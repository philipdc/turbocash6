# Contributing to TurboCASH 6

First off, thank you for considering contributing to TurboCASH 6! It's people like you that make TurboCASH 6 such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples** to demonstrate the steps
* **Describe the behavior you observed** and what behavior you expected
* **Include screenshots** if possible
* **Include your environment details** (browser, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a detailed description of the suggested enhancement**
* **Explain why this enhancement would be useful** to most users
* **List any alternatives you've considered**

### Pull Requests

Please follow these steps for contributing code:

1. **Fork the repository** and create your branch from `main`
2. **Follow the coding standards** outlined below
3. **Make your changes**
   - Keep changes focused and atomic
   - Write clear commit messages
   - Add tests if applicable
4. **Test your changes** thoroughly
5. **Update documentation** as needed
6. **Submit a pull request** with a clear description of your changes

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/philipdc/turbocash6.git
   cd turbocash6
   ```

2. Install dependencies (if any are added):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include appropriate ARIA labels for accessibility
- Validate markup using W3C validator

### CSS
- Follow BEM (Block Element Modifier) methodology for class names
- Use CSS variables for colors and common values
- Keep selectors specific but not overly complex
- Group related properties together
- Add comments for complex styling

Example:
```css
/* Component: Navigation */
.nav {
  /* Layout */
  display: flex;
  
  /* Appearance */
  background-color: var(--primary-color);
}

.nav__item {
  padding: 1rem;
}

.nav__item--active {
  font-weight: bold;
}
```

### JavaScript
- Use ES6+ features (const/let, arrow functions, template literals)
- Follow consistent naming conventions:
  - camelCase for variables and functions
  - PascalCase for classes
  - UPPER_CASE for constants
- Keep functions small and focused (single responsibility)
- Add JSDoc comments for functions
- Handle errors appropriately

Example:
```javascript
/**
 * Calculates the account balance
 * @param {Array} transactions - Array of transaction objects
 * @returns {Number} The calculated balance
 */
function calculateBalance(transactions) {
  return transactions.reduce((sum, transaction) => {
    return sum + transaction.amount;
  }, 0);
}
```

### File Organization
- Keep files small and focused
- Use descriptive file names (kebab-case)
- Place files in appropriate directories
- Import/export modules properly

### Commit Messages
Write clear commit messages following this format:
```
<type>: <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```
feat: Add transaction filtering by date range

- Added date picker components
- Implemented filter logic in transaction service
- Updated UI to display filtered results

Closes #123
```

## Testing

- Write tests for new features
- Ensure existing tests pass
- Aim for good code coverage
- Test in multiple browsers

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments to JavaScript functions
- Update SPEC.html if you change the architecture
- Keep code comments up to date

## Project Structure

```
turbocash6/
├── public/              # Static assets and entry point
│   ├── index.html      # Main HTML file
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── images/         # Images and icons
├── src/                # Source code
│   ├── components/     # Reusable UI components
│   ├── modules/        # Feature modules
│   ├── services/       # API and data services
│   └── utils/          # Helper functions
├── docs/               # Documentation
├── tests/              # Test files
└── SPEC.html           # Technical specification
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## License

By contributing to TurboCASH 6, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to TurboCASH 6! 🚀
