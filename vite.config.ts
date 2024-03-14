import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig( {
    
  plugins: [ react() ],
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis',
            },
        },
        
    },
    resolve: {
        alias: [ { find: "@", replacement: resolve( __dirname, "./src" ) } ]


}
})
