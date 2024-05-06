import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "blog-ng-scully",
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./posts"
      }
    },
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
  }
};
