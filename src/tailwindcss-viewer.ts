import type { Plugin } from 'vite';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import createServer from 'tailwind-config-viewer/server';

interface Options {
  viewer: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: Record<string, any>;
}

export function tailwindcssViewerPlugin(options: Options): Plugin {
  return {
    name: 'vite:tailwindcss-viewer',
    apply: 'serve',
    configureServer(server) {
      if (options.viewer) {
        const viewerServer = createServer({
          tailwindConfigProvider: () => options.config,
        }).asMiddleware();

        server.middlewares.use('/_tailwind/', viewerServer);
      }
    },
  };
}
