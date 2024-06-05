import Inspect from 'vite-plugin-inspect'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';


export default defineConfig({
  root: 'src',
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      jpg: {
        quality: 40
      },
    }),
  ],
});