import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'

export default defineConfig(async ({ command }) => {
  const config = {
    plugins: [
      babel({
        babelConfig: {
          babelrc: false,
          configFile: false,
          plugins: [
            ['@babel/plugin-proposal-decorators', {
              version: '2018-09',
              decoratorsBeforeExport: true
            }],
            ['@babel/plugin-proposal-class-properties'],
            ['@babel/plugin-transform-private-methods']
          ],
        }
      }),
    ]
  }

  return config
})
