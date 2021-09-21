import type { Plugin } from 'vite';
import type { Plugin as PostPlugin } from 'postcss';
import * as path from 'path';
import * as fs from 'fs';
import defu from 'defu';

import { tailwindcssViewerPlugin } from './tailwindcss-viewer';
import { Options } from './utils';
import defaultTailwindConfig from './tailwind.config';

export function tailwindcssPlugin(userOptions: Options): Plugin[] {
  const virtualFileId = 'virtual:tailwind.css';
  const options = defu(userOptions, {
    cssPath: path.resolve(__dirname, '../config/tailwind.css'),
    config: defaultTailwindConfig,
    viewer: true,
  });

  // handle user custom css path,
  // add root directory path if not absolute
  if (options.cssPath && !path.isAbsolute(options.cssPath)) {
    options.cssPath = path.resolve(process.cwd(), options.cssPath);
  }

  let tailwindConfig: Record<string, unknown> = {};

  // merge all tailwind config
  if (options.configPath) {
    if (!path.isAbsolute(options.configPath)) {
      options.configPath = path.resolve(process.cwd(), options.configPath);
    }

    if (fs.existsSync(options.configPath)) {
      const module = require(options.configPath);
      tailwindConfig = module.default;
    }

    if (Array.isArray(tailwindConfig.purge)) {
      tailwindConfig.purge = { content: tailwindConfig.purge };
    }
  }

  tailwindConfig = defu.arrayFn(tailwindConfig, options.config);

  return [
    {
      name: 'vite:tailwindcss',
      config() {
        const plugins: PostPlugin[] = [
          require('autoprefixer'),
          require('postcss-nesting'),
          require('postcss-custom-properties'),
        ];
        const tailwind = require('tailwindcss');
        const tailwindPlugin = tailwind(tailwindConfig);

        plugins.push(tailwindPlugin);

        return {
          css: {
            postcss: {
              plugins,
            },
          },
        };
      },
      resolveId(id) {
        if (id === virtualFileId) {
          return options.cssPath;
        }
      },
    },
    tailwindcssViewerPlugin(options),
  ];
}
