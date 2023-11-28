import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const src_folder = path.resolve('src')
const views_folder = path.resolve(src_folder, 'views')
const outDir = path.resolve('dist')

console.log(`Source folder: ${src_folder}`)
console.log(`Views folder: ${views_folder}`)
console.log(`Output folder: ${outDir}`)

// https://vitejs.dev/config/
export default defineConfig({
  root: views_folder,
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@mycomponents": path.resolve(__dirname, "src", "mycomponents"),
      "@components": path.resolve(__dirname, "src", "components")
    }
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        login: path.resolve(views_folder,'login', 'index.html'),
        panel: path.resolve(views_folder,'panel', 'index.html')
      }
    }
  }
})
