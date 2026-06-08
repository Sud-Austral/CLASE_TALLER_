import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El repo se publica en https://sud-austral.github.io/CLASE_TALLER_/
// por eso 'base' debe coincidir con el nombre del repositorio.
// https://vite.dev/config/
export default defineConfig({
  base: '/CLASE_TALLER_/',
  plugins: [react()],
})
