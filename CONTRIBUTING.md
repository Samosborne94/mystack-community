# Contributing to MyStack

First off, thank you for considering contributing to MyStack! It's people like you that make MyStack such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by the MyStack Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for MyStack. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report:**
- Check the debugging guide
- Check the FAQ for a list of common questions and problems
- Perform a cursory search to see if the problem has already been reported

**How Do I Submit A (Good) Bug Report?**
Bugs are tracked as GitHub issues. Create an issue using the bug report template and provide the following information:

- Use a clear and descriptive title
- Describe the exact steps which reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots if applicable

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for MyStack, including completely new features and minor improvements to existing functionality.

**Before Submitting An Enhancement Suggestion:**
- Check if the enhancement has already been suggested
- Check if you're using the latest version
- Perform a cursory search to see if the enhancement has already been suggested

**How Do I Submit A (Good) Enhancement Suggestion?**
Enhancement suggestions are tracked as GitHub issues. Create an issue using the feature request template and provide the following information:

- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior and explain which behavior you expected to see instead
- Explain why this enhancement would be useful

### Your First Code Contribution

Unsure where to begin contributing to MyStack? You can start by looking through these `beginner` and `help-wanted` issues:

- Beginner issues - issues which should only require a few lines of code, and a test or two
- Help wanted issues - issues which should be a bit more involved than beginner issues

### Pull Requests

The process described here has several goals:
- Maintain MyStack's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible MyStack
- Enable a sustainable system for MyStack's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in the template
2. Follow the styleguides
3. After you submit your pull request, verify that all status checks are passing

## Styleguides

### Git Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

Examples:
```
feat: add search functionality to content cards
fix: resolve memory leak in scraping worker
docs: update README with new installation steps
```

### JavaScript/React Styleguide

All JavaScript must adhere to the following:

- Use ES6+ features
- Use functional components with hooks
- Follow the existing code style (we use Prettier for formatting)
- Add JSDoc comments for complex functions
- Use meaningful variable and function names
- Keep functions small and focused on a single responsibility

### CSS/Tailwind Styleguide

- Use Tailwind utility classes instead of custom CSS when possible
- Follow the BEM methodology for custom CSS classes
- Use semantic HTML elements
- Ensure accessibility standards are met
- Test responsive design on multiple screen sizes

### Documentation Styleguide

- Use Markdown for documentation
- Use clear, concise language
- Include code examples where applicable
- Update documentation when making code changes
- Follow the existing documentation structure

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/mystack-platform.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Run tests: `npm test`
7. Run linting: `npm run lint`
8. Commit your changes: `git commit -m 'feat: your feature description'`
9. Push to your fork: `git push origin feature/your-feature-name`
10. Create a Pull Request

## Project Structure

Understanding the project structure will help you navigate and contribute effectively:

```
mystack-platform/
├── .github/           # GitHub workflows and templates
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── types/         # Type definitions
│   ├── data/          # Mock data and constants
│   └── utils/         # Utility functions
├── docs/              # Documentation
├── tests/             # Test files
└── scripts/           # Build and deployment scripts
```

## Testing

We maintain a comprehensive test suite to ensure code quality:

- Unit tests for individual components and functions
- Integration tests for component interactions
- End-to-end tests for critical user journeys

When contributing:
- Write tests for new functionality
- Update existing tests when modifying behavior
- Ensure all tests pass before submitting a PR

## Questions?

Don't hesitate to ask questions! You can:
- Open an issue with the "question" label
- Join our Discord community
- Email us at contact@mystack.ai

Thank you for contributing to MyStack! 🚀