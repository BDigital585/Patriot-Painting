# CLAUDE.md - AI Assistant Development Guide

## Project Overview

**Repository**: Patriot-Painting
**Purpose**: [To be defined - likely a painting business management application or website]
**Status**: Initial setup phase

This document provides comprehensive guidance for AI assistants working on this codebase. It covers the repository structure, development workflows, coding conventions, and best practices.

---

## Table of Contents

1. [Repository Structure](#repository-structure)
2. [Development Workflow](#development-workflow)
3. [Git Conventions](#git-conventions)
4. [Code Conventions](#code-conventions)
5. [Testing Strategy](#testing-strategy)
6. [AI Assistant Guidelines](#ai-assistant-guidelines)
7. [Common Commands](#common-commands)
8. [Technology Stack](#technology-stack)
9. [Security Considerations](#security-considerations)
10. [Troubleshooting](#troubleshooting)

---

## Repository Structure

### Current Structure
The repository is currently in initial setup phase. As the project develops, maintain the following structure:

```
Patriot-Painting/
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components/routes
│   ├── services/          # Business logic and API services
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   ├── hooks/             # Custom React hooks (if applicable)
│   └── assets/            # Static assets (images, fonts, etc.)
├── public/                # Public static files
├── tests/                 # Test files
│   ├── unit/             # Unit tests
│   ├── integration/      # Integration tests
│   └── e2e/              # End-to-end tests
├── docs/                  # Additional documentation
├── scripts/               # Build and utility scripts
├── .github/              # GitHub workflows and templates
├── CLAUDE.md             # This file
├── README.md             # Project README
├── package.json          # Node dependencies (if Node.js project)
└── .gitignore            # Git ignore patterns
```

### Key Directories

- **`src/`**: All application source code
- **`tests/`**: All test files (keep tests close to source when appropriate)
- **`docs/`**: Architecture decisions, API documentation, user guides
- **`scripts/`**: Automation scripts for builds, deployments, data migrations

---

## Development Workflow

### Branch Strategy

- **Main Branch**: `main` (or `master`) - production-ready code
- **Feature Branches**: `claude/claude-md-*` for AI-assisted development
- **Naming Convention**: `feature/<feature-name>`, `bugfix/<issue-number>`, `hotfix/<issue>`

### Development Process

1. **Start from Latest Code**
   ```bash
   git fetch origin
   git checkout main
   git pull origin main
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Write code following conventions
   - Add tests for new functionality
   - Update documentation as needed

4. **Commit Changes**
   - Use clear, descriptive commit messages
   - Follow conventional commits format
   - Keep commits atomic and focused

5. **Push and Create PR**
   ```bash
   git push -u origin feature/your-feature-name
   ```

### Code Review Guidelines

- All changes should be reviewed before merging to main
- Ensure tests pass and code coverage is maintained
- Check for security vulnerabilities
- Verify documentation is updated

---

## Git Conventions

### Commit Message Format

Follow the Conventional Commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates

**Examples:**
```
feat(auth): add user authentication system

Implement JWT-based authentication with login and registration endpoints.
Includes password hashing with bcrypt and token refresh functionality.

Closes #123
```

```
fix(booking): correct date calculation for availability

Fixed off-by-one error in date range calculation that caused
incorrect availability display.
```

### Git Best Practices

1. **Commit Frequently**: Make small, logical commits
2. **Write Clear Messages**: Future developers should understand why changes were made
3. **Don't Commit Secrets**: Never commit API keys, passwords, or sensitive data
4. **Keep History Clean**: Avoid force pushing to shared branches
5. **Pull Before Push**: Always pull latest changes before pushing

---

## Code Conventions

### General Principles

1. **DRY (Don't Repeat Yourself)**: Extract common logic into reusable functions
2. **KISS (Keep It Simple, Stupid)**: Prefer simple solutions over complex ones
3. **YAGNI (You Aren't Gonna Need It)**: Don't add functionality until it's needed
4. **Single Responsibility**: Each function/class should have one clear purpose

### JavaScript/TypeScript Conventions

```typescript
// Use descriptive variable names
const customerBookings = getBookings();  // Good
const data = get();                      // Bad

// Use const by default, let when reassignment needed
const API_URL = 'https://api.example.com';
let bookingCount = 0;

// Function naming: verbs for actions
function calculateEstimate(squareFeet, coats) {
  return squareFeet * coats * PRICE_PER_SQFT;
}

// Use arrow functions for callbacks
customers.map(customer => customer.email);

// Async/await over promises when possible
async function fetchCustomerData(id) {
  try {
    const response = await fetch(`/api/customers/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch customer:', error);
    throw error;
  }
}
```

### File Naming

- **Components**: PascalCase - `CustomerProfile.jsx`, `BookingForm.tsx`
- **Utilities**: camelCase - `dateUtils.js`, `formatters.js`
- **Constants**: UPPER_SNAKE_CASE - `API_CONSTANTS.js`
- **Tests**: Match source file - `CustomerProfile.test.jsx`

### Code Organization

```typescript
// 1. Imports (external first, then internal)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { formatDate } from '../utils/dateUtils';
import { Button } from '../components/Button';

// 2. Constants
const MAX_BOOKINGS = 10;

// 3. Types/Interfaces
interface Booking {
  id: string;
  date: Date;
  customer: string;
}

// 4. Main component/function
export function BookingList() {
  // hooks first
  const [bookings, setBookings] = useState<Booking[]>([]);

  // effects
  useEffect(() => {
    loadBookings();
  }, []);

  // helper functions
  const loadBookings = async () => {
    // implementation
  };

  // render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

// 5. Helper functions (if not exported)
// 6. Exports
```

### CSS/Styling Conventions

- Use CSS modules or styled-components for component styles
- Follow BEM naming convention if using plain CSS
- Keep styles close to components
- Use CSS variables for theming

---

## Testing Strategy

### Test Coverage Goals

- **Unit Tests**: 80%+ coverage for business logic
- **Integration Tests**: Critical user flows
- **E2E Tests**: Core user journeys

### Testing Best Practices

```javascript
// Arrange-Act-Assert pattern
describe('calculateEstimate', () => {
  it('should calculate correct estimate for standard job', () => {
    // Arrange
    const squareFeet = 1000;
    const coats = 2;

    // Act
    const result = calculateEstimate(squareFeet, coats);

    // Assert
    expect(result).toBe(2000);
  });

  it('should handle edge cases', () => {
    expect(calculateEstimate(0, 2)).toBe(0);
    expect(calculateEstimate(1000, 0)).toBe(0);
  });
});
```

### Test File Organization

- Keep tests close to source: `src/components/Button.test.tsx`
- Or in dedicated test directory: `tests/unit/components/Button.test.tsx`
- Use descriptive test names
- Test behavior, not implementation

---

## AI Assistant Guidelines

### When Working on This Codebase

1. **Always Read Before Modifying**
   - Never propose changes without reading existing code
   - Understand context and patterns before making changes

2. **Use TODO Lists**
   - Create todo lists for multi-step tasks
   - Mark tasks as in_progress before starting
   - Mark completed immediately when done

3. **Follow Existing Patterns**
   - Match the coding style of the file you're editing
   - Use similar naming conventions
   - Follow established project structure

4. **Security First**
   - Watch for OWASP Top 10 vulnerabilities
   - Validate user input at boundaries
   - Never expose sensitive data
   - Use parameterized queries for databases

5. **Avoid Over-Engineering**
   - Only make changes directly requested
   - Don't add "nice to have" features
   - Keep solutions simple and focused
   - No premature abstractions

6. **Documentation**
   - Update CLAUDE.md if project structure changes
   - Add JSDoc comments for complex functions
   - Update README with new features
   - Don't add comments for self-explanatory code

7. **Error Handling**
   - Only add error handling where it adds value
   - Trust internal code; validate at boundaries
   - Provide helpful error messages

8. **Testing**
   - Write tests for new features
   - Update tests when changing functionality
   - Run tests before committing

### Communication Style

- Be concise and direct
- Focus on facts, not validation
- Ask questions when requirements are unclear
- Use the AskUserQuestion tool when needed
- Reference code locations: `file.ts:123`

### Common Pitfalls to Avoid

❌ **Don't:**
- Commit without reading existing code
- Add features not requested
- Include time estimates
- Create documentation files proactively
- Use emojis unless requested
- Over-engineer solutions
- Add error handling for impossible scenarios
- Create abstractions for one-time operations

✅ **Do:**
- Read code before modifying
- Make minimal, focused changes
- Ask clarifying questions
- Follow existing patterns
- Write tests for new code
- Update documentation when structure changes
- Use TodoWrite for complex tasks

---

## Common Commands

### Development

```bash
# Install dependencies (adjust based on package manager)
npm install          # or yarn install, pnpm install

# Start development server
npm run dev          # or yarn dev

# Build for production
npm run build        # or yarn build

# Run tests
npm test             # or yarn test

# Run linter
npm run lint         # or yarn lint

# Format code
npm run format       # or yarn format
```

### Git Operations

```bash
# Check status
git status

# Stage changes
git add .

# Commit with message
git commit -m "feat: add feature description"

# Push to remote (with retry logic for network issues)
git push -u origin branch-name

# Fetch specific branch
git fetch origin branch-name

# Pull latest changes
git pull origin branch-name

# View commit history
git log --oneline -10
```

### Useful Shortcuts

```bash
# View diff before committing
git diff

# View staged changes
git diff --cached

# Search for pattern in code
grep -r "pattern" src/

# Find files by name
find . -name "*.tsx"
```

---

## Technology Stack

**To be determined based on project requirements**

Likely technologies for a painting business application:

### Frontend
- React or Next.js for UI
- TypeScript for type safety
- CSS Modules or Tailwind CSS for styling
- React Hook Form for forms
- Axios or Fetch for API calls

### Backend
- Node.js with Express or Next.js API routes
- PostgreSQL or MongoDB for database
- JWT for authentication
- Stripe for payments (if applicable)

### DevOps
- GitHub Actions for CI/CD
- Docker for containerization
- Vercel or AWS for hosting

### Testing
- Jest for unit tests
- React Testing Library for component tests
- Playwright or Cypress for E2E tests

---

## Security Considerations

### Critical Security Practices

1. **Authentication & Authorization**
   - Use secure password hashing (bcrypt, argon2)
   - Implement JWT with appropriate expiration
   - Validate permissions on every protected endpoint

2. **Input Validation**
   - Validate all user input on the server side
   - Sanitize data before database operations
   - Use parameterized queries (never string concatenation)

3. **Data Protection**
   - Never commit secrets to git
   - Use environment variables for sensitive config
   - Encrypt sensitive data at rest
   - Use HTTPS in production

4. **Common Vulnerabilities**
   - **SQL Injection**: Use parameterized queries
   - **XSS**: Sanitize user input, use Content Security Policy
   - **CSRF**: Use CSRF tokens for state-changing operations
   - **Dependency Vulnerabilities**: Regularly update dependencies

5. **API Security**
   - Rate limiting for public endpoints
   - Input validation and sanitization
   - Proper error messages (don't leak implementation details)

### Environment Variables

```bash
# .env.example (commit this)
DATABASE_URL=postgresql://localhost:5432/dbname
JWT_SECRET=your-secret-here
STRIPE_KEY=your-key-here

# .env (DO NOT commit this)
# Contains actual secrets
```

---

## Troubleshooting

### Common Issues

**Issue: Git push fails with 403 error**
```bash
# Solution: Ensure branch name starts with 'claude/' and matches session ID
git branch -m old-name claude/new-name
git push -u origin claude/new-name
```

**Issue: Tests failing after changes**
```bash
# Solution: Run tests locally and fix failures
npm test
# Check test output for specific failures
```

**Issue: Merge conflicts**
```bash
# Solution: Pull latest changes and resolve conflicts
git fetch origin
git merge origin/main
# Resolve conflicts in editor
git add .
git commit -m "merge: resolve conflicts with main"
```

**Issue: Dependencies not installing**
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Debug Checklist

When troubleshooting issues:

1. ✅ Check error messages carefully
2. ✅ Verify environment variables are set
3. ✅ Ensure dependencies are installed
4. ✅ Check file paths are correct
5. ✅ Verify branch is up to date
6. ✅ Review recent commits for breaking changes
7. ✅ Check browser console for frontend issues
8. ✅ Review server logs for backend issues

---

## Project-Specific Notes

### Business Context: Patriot Painting

This application is designed to support a painting business. Key features may include:

- **Customer Management**: Track customer information and history
- **Quote/Estimate Generation**: Calculate project costs based on square footage, materials, labor
- **Booking System**: Schedule painting jobs and manage crew availability
- **Project Tracking**: Monitor job progress and completion
- **Invoice Generation**: Create and send invoices to customers
- **Photo Gallery**: Before/after photos of completed work

### Domain Terminology

- **Estimate/Quote**: Price calculation for potential job
- **Booking**: Scheduled painting appointment
- **Job**: Active or completed painting project
- **Crew**: Team of painters assigned to a job
- **Square Footage**: Primary measurement for pricing
- **Coats**: Number of paint layers (affects pricing and scheduling)

---

## Maintenance and Updates

### Keeping CLAUDE.md Current

This file should be updated when:

- Project structure changes significantly
- New technologies are added to the stack
- Development workflows change
- New conventions are established
- Important patterns emerge

### Version History

- **2026-01-17**: Initial creation - repository setup phase

---

## Additional Resources

### Documentation
- Project README: `README.md`
- API Documentation: `docs/api.md` (when available)
- Architecture Decisions: `docs/adr/` (when available)

### External Resources
- [Conventional Commits](https://www.conventionalcommits.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Best Practices](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

## Contact and Support

For questions or issues:
1. Check this documentation first
2. Review existing code for patterns
3. Search issues in the repository
4. Create a new issue with detailed description

---

**Last Updated**: 2026-01-17
**Maintainer**: Development Team
**Version**: 1.0.0
