# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Build and Development
- `npm start` - Start the development server (runs on port 3000)
- `npm run build` - Build the production bundle
- `npm test` - Run tests with React Scripts test runner

### Code Quality
- `npm run lint` - Run ESLint on all TypeScript files
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run type-check` - Run TypeScript type checking without emitting files

### Testing
- `npm test` - Run tests in interactive watch mode
- `npm test -- --coverage` - Run tests with coverage report
- `npm test -- --watchAll=false` - Run tests once without watch mode

## Project Architecture

### Tech Stack
- **React 18** with TypeScript for the UI framework
- **Redux Toolkit** for state management with typed hooks
- **Material-UI (MUI)** for component library and theming
- **React Router v6** for client-side routing
- **Axios** for HTTP requests
- **LangChain & OpenAI** integration for AI features
- **React Scripts** as the build toolchain

### High-Level Architecture

#### State Management
The application uses Redux Toolkit with the following slices in `src/store/`:
- `loginSlice` - Authentication state management
- `themeSlice` - Theme preferences (dark/light mode)
- `serverResponsesSlice` - API response caching
- `chatHistorySlice` - Prompt engineering chat history
- `ragChatHistorySlice` - RAG demo chat history
- `counterSlice` - Demo counter feature

The store is configured in `src/store/store.ts` with TypeScript types for `RootState` and `AppDispatch`.

#### Routing Structure
The application has two routing contexts defined in `src/common/routes.tsx`:
- **Authenticated routes** (`authRoutes`): Home, Benchmark, AI demos (Prompt Engineering, Fine Tuning, RAG), Dashboard, Orders
- **Unauthenticated routes** (`notAuthRoutes`): Login page

The main `App.tsx` conditionally renders `AuthPage` or `NotAuthPage` based on login state.

#### API Services
Multiple API service libraries in `src/utils/`:
- `ControllerBasedApiLib.ts` - .NET Controller-based API integration
- `MinimalApiLib.ts` - .NET Minimal API integration
- `ExpressApiService.ts` - Node.js Express API integration
- `ExpressGraphQLService.ts` - GraphQL API integration
- `GinApiLib.ts` - Go Gin framework API integration
- `OpenAiLib.ts` - Direct OpenAI API integration
- `LangChainLib.ts` - LangChain integration

#### Feature Pages
- **Home** (`src/home/`) - Landing page with feature descriptions
- **Benchmark** (`src/benchmark/`) - API performance testing with charts
- **Prompt Engineering** (`src/promptEngineeringPage/`) - Chat interface for prompt testing
- **Fine Tuning** (`src/fineTuningPage/`) - Fine-tuning demo interface
- **RAG** (`src/ragPage/`) - Retrieval-Augmented Generation demo
- **Dashboard** (`src/dashboard/`) - Analytics dashboard with charts

#### Component Organization
- Common UI components in `src/common/` (AppBar, SideDrawer, etc.)
- Feature-specific components within their respective directories
- Each major feature has its own Badges, DescPanel, and related components

### Code Style Configuration
- **ESLint** with TypeScript plugin for linting
- **Prettier** for code formatting with the following settings:
  - Tabs for indentation (width: 2)
  - Single quotes for strings
  - Semicolons required
  - Trailing commas
  - Line width: 120 characters
- TypeScript strict mode enabled

### TypeScript Configuration
- Target: ES5
- JSX: React
- Strict mode enabled
- Module resolution: Node
- No emit (handled by React Scripts)

### Deployment
- Configured for Azure Static Web Apps deployment
- SPA routing handled via `staticwebapp.config.json`