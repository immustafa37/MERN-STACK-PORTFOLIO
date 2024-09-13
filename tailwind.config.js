// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode with a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: '#FFFFFF', // White
        secondary: '#000000', // Black

        // Dark theme colors
        'dark-primary': '#121212', // Dark gray background
        'dark-secondary': '#E0E0E0', // Light gray text
      },
      keyframes: {
        bounceIn: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        bounceIn: 'bounceIn 1s infinite',
        fadeIn: 'fadeIn 1.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
