# Development Guide

This guide covers the development workflow and best practices for the MyStack platform.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- VS Code (recommended) with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mystack-platform.git
   cd mystack-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to http://localhost:5173

## Project Architecture

### Frontend Architecture

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components (Button, Card, etc.)
│   ├── Layout.jsx     # App layout and navigation
│   └── Router.jsx     # Client-side routing
├── pages/             # Page components
│   ├── HomePage.jsx   # Landing page
│   └── BrowsePage.jsx # Search and browse page
├── types/             # Type definitions and constants
├── data/              # Mock data and API structures
├── hooks/             # Custom React hooks
└── utils/             # Utility functions
```

### Component Structure

Follow this pattern for new components:

```jsx
import { forwardRef } from 'react'

const ComponentName = forwardRef(({ 
  children, 
  className = '',
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`base-styles ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

ComponentName.displayName = 'ComponentName'

export default ComponentName
```

## Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/feature-name` - Feature development
- `fix/bug-description` - Bug fixes
- `docs/update-description` - Documentation updates

### Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add user authentication
fix: resolve memory leak in search
docs: update API documentation
style: format code with prettier
refactor: simplify data processing logic
test: add unit tests for search component
chore: update dependencies
```

### Pull Request Process

1. Create feature branch from `main`
2. Make your changes following the style guide
3. Write/update tests if applicable
4. Run linting and tests locally
5. Commit with conventional commit messages
6. Push branch and create Pull Request
7. Address review feedback
8. Merge after approval and CI passes

## Code Style Guide

### JavaScript/React

- Use ES6+ features
- Prefer functional components with hooks
- Use meaningful variable and function names
- Keep functions small and focused
- Add comments for complex logic
- Use JSDoc for component props

Example:
```jsx
/**
 * SearchBar component for filtering content
 * @param {string} placeholder - Input placeholder text
 * @param {Function} onSearch - Search callback function
 * @param {string} className - Additional CSS classes
 */
const SearchBar = ({ placeholder, onSearch, className = "" }) => {
  // Component logic here
}
```

### CSS/Tailwind

- Use Tailwind utilities first, custom CSS only when necessary
- Follow mobile-first responsive design
- Use semantic HTML elements
- Ensure accessibility (ARIA labels, keyboard navigation)
- Test across different screen sizes

Good:
```jsx
<button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
  Click me
</button>
```

Avoid:
```jsx
<div className="cursor-pointer" onClick={handleClick}>
  <span>Click me</span>
</div>
```

## Testing Strategy

### Unit Tests
- Test individual components and functions
- Focus on component behavior, not implementation details
- Use React Testing Library for component tests

### Integration Tests
- Test component interactions
- Test data flow between components
- Mock external dependencies

### E2E Tests
- Test critical user journeys
- Test across different browsers and devices
- Use tools like Playwright or Cypress

## Performance Guidelines

### Code Splitting
- Use dynamic imports for large components
- Split routes at the page level
- Lazy load heavy dependencies

### State Management
- Use local state when possible
- Consider Context API for shared state
- Implement proper memoization with useMemo/useCallback

### Bundle Optimization
- Use Vite's built-in optimizations
- Analyze bundle size regularly
- Remove unused dependencies

## Debugging

### Development Tools

1. **React Developer Tools**
   - Component tree inspection
   - Props and state debugging
   - Performance profiling

2. **Browser DevTools**
   - Network tab for API calls
   - Performance tab for bottlenecks
   - Console for logging

3. **VS Code Debugging**
   - Set breakpoints in source code
   - Step through React components
   - Inspect variables and scope

### Common Issues

**Styling not applying:**
- Check Tailwind class names for typos
- Ensure PostCSS is configured correctly
- Clear browser cache

**Component not re-rendering:**
- Check if state updates are immutable
- Verify dependency arrays in hooks
- Use React DevTools to inspect updates

**Build errors:**
- Check import/export statements
- Ensure all dependencies are installed
- Review TypeScript errors (when added)

## API Integration

### Mock Data Structure

Current mock data follows the planned API structure:

```javascript
const contentItem = {
  id: 'unique-id',
  title: 'Content title',
  description: 'Content description',
  content_type: 'prompt|tutorial|workflow',
  category: 'marketing|development|creative',
  ai_models: ['chatgpt', 'claude'],
  source_platform: 'github|reddit|medium',
  quality_score: 85,
  popularity_metrics: {
    views: 1000,
    likes: 50,
    shares: 10
  },
  // ... more fields
}
```

### Future API Integration

When the backend is ready:

1. Replace mock data with API calls
2. Implement error handling and loading states
3. Add caching strategies
4. Handle authentication and authorization

## Deployment

### Staging Deployment

- Automatic deployment on `main` branch push
- Uses GitHub Actions workflow
- Available at staging URL

### Production Deployment

- Manual trigger or tag-based deployment
- Includes additional security checks
- Full test suite execution
- Performance monitoring

## Troubleshooting

### Common Development Issues

1. **Node modules issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port already in use**
   ```bash
   lsof -ti:5173 | xargs kill -9
   ```

3. **Git conflicts**
   - Use VS Code's merge conflict resolution
   - Understand the changes before accepting
   - Test after resolving conflicts

### Getting Help

- Check existing GitHub issues
- Create new issue with detailed reproduction steps
- Join Discord community for real-time help
- Review documentation and guides

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)