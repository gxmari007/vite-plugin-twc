import type { Plugin } from 'vite';

import { tailwindcssPlugin } from './tailwindcss';
import { Options } from './utils';

export function plugin(options: Options = {}): Plugin[] {
  return [tailwindcssPlugin(options)];
}
