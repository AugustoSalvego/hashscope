# Contributing to HashScope

Thank you for your interest in contributing to HashScope.

HashScope is an educational project focused on visualizing hash tables, collisions and collision resolution strategies.

## Project Goals

Contributions should preserve the main goals of the project:

- educational clarity
- simple and maintainable architecture
- strong visual feedback
- multilingual support
- performance on low-end devices
- no unnecessary dependencies

## Development Guidelines

Before submitting changes:

1. Keep the interface clear and readable.
2. Avoid adding heavy visual effects or unnecessary libraries.
3. Keep visible UI text inside `data/content.ts`.
4. Keep hash table logic inside `lib/hash.ts`.
5. Make sure Portuguese, English and Italian translations stay synchronized.
6. Avoid overengineering.

## Running Locally

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Validate the project:

```bash
npm run lint
npm run build
```

## Suggested Commit Style

Use short and clear commit messages, for example:

```txt
Add live hash preview
Improve theory section layout
Update project documentation
```

## Pull Requests

A good pull request should include:

- a clear description of the change
- screenshots or notes when changing the UI
- confirmation that lint and build passed

## Educational Consistency

HashScope is not only a visual interface. It is a learning tool.

When adding features, make sure the user can understand:

- what is happening
- why it is happening
- how it relates to hash tables