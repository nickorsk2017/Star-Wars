@Author Stepanov Nikolai

[https://t.me/nickstep_gr](https://t.me/nickstep_gr)

# Task description

Test task for React engineer

Using the Star Wars API (https://swapi.dev/) as a data source, implement a React and Typescript SPA application (HR asked implement on Next.js) consisting of two pages.

On the main page, display a list or cards of characters, add the ability to paginate and search using the API to the list.

Implement a page with detailed information on the selected character. On this page, add the ability to edit and save information about the character locally, without sending it to the server.

# Tools

The project used:

- Next.js / React - main framework for application
- SWR for requests to backend
- Tailwind - framerwork or styles
- Daisyui - UI library based on Tailwind
- Zustand - library for global state managment
- Typescript
- Storybook - for visual testing UI Kit
- Jest and Testing library for unit tests
- ESlint and Pritier - for code style
- GitHub - for code repository
- Lodash.debounce

# Archetecture design

- api - contains API requests
- app - folder endpoint components and routing
- components - UI / Icons. This folder contains components without business logic.
- containers - constituent blocks with business logic. Smart components.
- store - global store logic
- types - contains \*.d.ts types, classes for typescript
- \_\_mock\_\_ - mock data for testing
- \_\_test\_\_ - files for unit tests

# Commands

## 1. Go to front-end directory

In root folder in the terminal go to front-end folder

```bash
cd ./front-end
```

## 2. Install dependencies

(You can use npm or yarn)

```bash
npm install
```

or

```bash
yarn install
```

## 3. Run app

For running application use command. Than open in browser http://localhost:3000

```bash
npm run dev
```

## 4. Check unit tests

```bash
npm run test
```

## 5. Visual testing

In project is used Storybook. After command open http://localhost:6006/

```bash
npm run storybook
```

## 6. Check code styles

These commands check styles by ESlint and Prittier

```bash
npm run lint
```

```bash
npm run format
```

# The final chapter

I appreciate the time you took to research my assignment.

Thank you very much.
