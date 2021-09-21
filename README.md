# vite-plugin-twc

Use Tailwindcss with zero configuration in vite.

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

## Lisence

MIT
