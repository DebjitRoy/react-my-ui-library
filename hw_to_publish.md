Publishing a React UI library involves a few key steps to package your components properly and share them via a registry like npm. Here's a clear and practical guide to help you through the process:

---

### ✅ 1. **Set Up the Project**

You can start with a basic setup using Vite (recommended for modern builds):

```bash
npm create vite@latest my-ui-library --template react-ts
cd my-ui-library
npm install
```

---

### ✅ 2. **Build Your Components**

Organize reusable components inside a `src/components` folder. Example:

```tsx
// src/components/Button.tsx
import React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => (
  <button style={{ padding: '10px 20px' }}>{children}</button>
);
```

Then export them all in an `index.ts`:

```ts
// src/index.ts
export * from './components/Button';
```

---

### ✅ 3. **Add TypeScript and Build Config**

Add a `tsconfig.json` if not already present, and configure `package.json`:

```json
{
  "name": "my-react-ui-library",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "module": "dist/index.mjs",
  "files": ["dist"],
  "scripts": {
    "build": "tsc && vite build",
    "prepublishOnly": "npm run build"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

---

### ✅ 4. **Compile the Code**

Use TypeScript to compile your components to plain JS and generate type declarations.

Install dependencies:

```bash
npm install --save-dev typescript vite @vitejs/plugin-react
```

Configure `vite.config.ts` to output a library:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyUILibrary',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
```

---

### ✅ 5. **Test Your Library Locally**

To test locally before publishing:

1. Run `npm run build`
2. In another test React app, use:

```bash
npm link /path/to/your/library
```

---

### ✅ 6. **Publish to npm**

Before publishing:

- Ensure you are logged in: `npm login`
- Set access (for scoped packages): `npm publish --access public`

Then:

```bash
npm publish
```

---

### 📝 Bonus Tips

- Use **Storybook** to document components.
- Add **README.md** and changelogs.
- Consider tools like **tsup** or **rollup** for bundling if not using Vite.
- Include a `.npmignore` to avoid uploading dev/test files.

---
