/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#fcfbf9',
          100: '#f6f4ed',
          200: '#ece8db',
          300: '#e1dac6',
          400: '#cec2a8', /* Light Olive */
          500: '#a39a7e', /* Olive Gold (Primary) */
          600: '#8c8469',
          700: '#6f6954',
          800: '#5a5446',
          900: '#4b473d',
        },
        blue: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#78716c', /* Stone 500 */
          600: '#57534e', /* Stone 600 */
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        cyan: {
          300: '#e1dac6', /* Match Sky 300 (Beige) */
          500: '#cec2a8',
        },
        indigo: {
          500: '#8c8469', /* Match Gold 600 */
          600: '#6f6954',
        },
        purple: {
          50: '#fafaf9',
          500: '#a39a7e',
          600: '#8c8469',
        },
        slate: {
          800: '#2c2b29', /* Warm Black */
          900: '#1a1918',
        }
      }
    },
  },
  plugins: [],
}
