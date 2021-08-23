import type { Plugin } from 'vite';

import { tailwindcssPlugin } from './tailwindcss';

export function plugin(): Plugin[] {
  return [tailwindcssPlugin()];
}
