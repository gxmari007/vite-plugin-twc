import * as path from 'path';
import { Plugin } from 'vite';
import defu from 'defu';

import { Options } from './utils';
import defaultTailwindConfig from './tailwind.config';

export function tailwindcssPlugin(userOptions: Options): Plugin {
  const virtualFileId = 'virtual:tailwind.css';
  const options = defu<Options, Options>(userOptions, {
    cssPath: path.resolve(__dirname, '../config/tailwind.css'),
    config: defaultTailwindConfig,
  });

  // handle user custom css path,
  // add root directory path if not absolute
  if (options.cssPath && !path.isAbsolute(options.cssPath)) {
    options.cssPath = path.resolve(process.cwd(), options.cssPath);
  }

  return {
    name: 'vite-plugin-twc',
    resolveId(id) {
      if (id === virtualFileId) {
        return options.cssPath;
      }
    },
  };
}
