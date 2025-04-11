# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## My Notes

- `npm create vite@latest`
- choose project name and React TS+SWC

- Tailwind setup steps:

  - https://tailwindcss.com/docs/installation/using-vite
  - follow steps from link to add tailwind to vite proj
  - conditional class merging - `npm add clx`
    - `className={clx("base-styles", isPrimary && "bg-blue-500")}`
  - Prevents conflicting Tailwind classes from being applied -`npm add tailwind-merge`
    - twMerge("bg-red-500 bg-blue-500") // => "bg-blue-500"
  - Declarative class variants for components -`npm add class-variance-authority`

    - Define and manage variants (e.g., size, intent, state) in one place for a component.

    ```

      const button = cva("font-medium rounded", {
        variants: {
          intent: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-gray-200 text-black",
          },
          size: {
            sm: "text-sm px-2 py-1",
            lg: "text-lg px-4 py-2",
          },
        },
        defaultVariants: {
          intent: "primary",
          size: "sm",
        },
      });

    ```

- Storybook

  - `npx storybook init`
  - https://storybook.js.org/docs/get-started/install

  - `npm run storybook`
  - storybook will run at localhost:6006

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
