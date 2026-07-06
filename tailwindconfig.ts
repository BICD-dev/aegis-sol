/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- Aegis OSL design tokens ---
        // Primary Navy: authority/trust, hero backgrounds, primary text
        navy: {
          900: '#0B2545',
          950: '#07172B', // deep footer / gradient end
        },
        // Secondary Steel Blue: subheadings, active states, secondary UI
        steel: {
          600: '#1C6EA4',
        },
        // Accent Safety Amber: reserved for CTAs, badges, key metrics
        amber: {
          500: '#F4A300',
          600: '#D99100', // hover state
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};