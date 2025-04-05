# Backend Template

A TypeScript-based Node.js backend service with Express and MongoDB.

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB with Mongoose
- Zod for validation
- Swagger for API documentation
- Jest for testing
- Husky for git hooks
- Commitlint for commit message validation

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Pnpm

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Copy `.env.example` to `.env` and configure your environment variables
4. Start the development server:
   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build the project
- `pnpm start` - Start production server
- `pnpm test` - Run tests
- `pnpm test-watch` - Run tests in watch mode
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## API Documentation

Once the server is running, visit `/docs` for the Swagger API documentation.

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/). Commit messages should be formatted as:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks
- `ci`: CI/CD related changes
- `build`: Build system changes
- `revert`: Reverting changes

### Examples

```
feat(auth): add login endpoint
fix(user): resolve type error in createOne
docs: update API documentation
```

## Project Structure

```
src/
├── lib/           # Core utilities and configurations
├── middlewares/   # Express middlewares
├── res/           # Resources (routes, controllers, services)
│   └── user/      # User module
└── index.ts       # Application entry point
```

## License

Private
