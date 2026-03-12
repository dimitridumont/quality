# @hexa-web/quality

Shared ESLint, Prettier, TypeScript and lint-staged configs for Hexa Web projects.

## Install

```bash
npm install dimitridumont/quality
```

## Usage

### ESLint

```js
// eslint.config.mjs
export { default } from "@hexa-web/quality/eslint"
```

### Prettier

```json
// package.json
{
  "prettier": "@hexa-web/quality/prettier"
}
```

### TypeScript

```json
// tsconfig.json
{
  "extends": "@hexa-web/quality/tsconfig",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".next/dev/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### lint-staged

```json
// package.json
{
  "lint-staged": "@hexa-web/quality/lint-staged"
}
```

### .prettierignore

```json
// package.json
{
  "scripts": {
    "postinstall": "cp node_modules/@hexa-web/quality/.prettierignore .prettierignore"
  }
}
```
