## Getting Started

This template has a few adjustments in comparison to default Create Next App. It is based on the `default-tw` template, but once installed it has:

- Needed dependencies and Node.js version:

```json
{
  "dependencies": {
    "@portabletext/react": "^2.0.0",
    "@sanity/image-url": "^1.0.1",
    "@types/node": "^18.11.17",
    "@types/react": "^18.0.26",
    "@types/react-dom": "18.0.9",
    "autoprefixer": "10.4.14",
    "eslint": "8.40.0",
    "eslint-config-next": "13.4.1",
    "next": "13.4.1",
    "next-sanity": "^3.1.4",
    "postcss": "8.4.23",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "3.3.2"
  },
  "devDependencies": {
    "prettier": "^2.8.8",
    "typescript": "^5.0.4"
  },
  "engines": {
    "node": "^18.12.1"
  }
}
```

> 💡 TypeScript is a `peerDependency` of Next.js' ESLint preset.

- Environment Variables (see `.env.template`).
- Prettier configuration (optional, I like autoformat on cmd+save).
- Added `@ts-check` to files so TypeScriptCompiler can, well... check types.
- Reformat `next.config.js` to `next.config.mjs`, added Sanity CDN to allow-list Image domains.
- Add `jsx: 'react-jsx'` to `jsconfig.json` so VSCode's Language Service Provider understands React and JSX.
- `public/hero.jpg` and `public/met.svg`.
- Placeholder components.
- Added Node.js (`^18.12.1`) version to `package.json`.

### Local Install

I recommend using `degit` instead of `git clone`, it's faster and doesn't carry over unnecessary repository history. I use [pnpm](https://pnpm.io), but it should work with any package manager.

```sh
pnpx atilafassina/training-setup your-directory
```
