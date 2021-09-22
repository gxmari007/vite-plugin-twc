# vite-plugin-twc

Use tailwindcss with zero configuration in vite.

## Install

```bash
npm install vite-plugin-twc --save-dev
# or
yarn add vite-plugin-twc --dev
```

## Usage

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'vite-plugin-twc';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
});
```

## Options

### `cssPath`

- type: `string`

Define the path of tailwind css file, by default use module's css file.

```js
// Import css file
// it will replace to cssPath by vite
import 'virtual:tailwind.css';
```

### `configPath`

- type: `string`

Define the path of tailwind config file, this will merge with default config.

```js
// Default Tailwind config
{
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

### `config`

- type: `object`

Extend the tailwind config with the config property, merge with default config.

### `viewer`

- type: `boolean`
- default: `true`

Use [tailwind-config-viewer](https://github.com/rogden/tailwind-config-viewer) to view css list, define in `/_tailwind/` route, only available in development.

## Lisence

MIT
