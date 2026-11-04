import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' works for a tvojusername.github.io repo.
// If the repo has another name, use base: '/repo-name/'
export default defineConfig({ plugins: [react()], base: '/' })
