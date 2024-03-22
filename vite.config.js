import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'

export default defineConfig(async ({ command }) => {
  const config = {
    build: {
      manifest: false,
      assetsDir: '.',
      target: 'esnext',
      //export index.js without hash
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]'
        }
      },
      minify: false,
      lib: {
        entry: 'index.js',
        formats: ['es']
      },
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true
    },
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
