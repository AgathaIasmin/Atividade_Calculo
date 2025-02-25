export default {
    root: './', 
    build: {
      outDir: 'dist', 
      rollupOptions: {
        input: 'index.html' 
      }
    },
    server: {
      open: true 
    }
}