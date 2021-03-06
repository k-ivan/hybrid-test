import path from 'path';
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return {
    base: (mode === 'development') ? '/' : '/hybrid-test/',
    plugins: [
      vue(),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      })
    ],
    define: {
      'process.env': {}
    }
  }
}
