/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 温暖阳光配色方案
        primary: {
          DEFAULT: '#F9B872', // 主色 - 温暖橙黄色
          light: '#FFDDB0',
          dark: '#E09A50',
        },
        secondary: {
          DEFAULT: '#FFFFFF', // 辅色 - 纯白色
          light: '#F5F5F5',
        },
        accent: {
          DEFAULT: '#5E8C61', // 强调色 - 森林绿
          light: '#7AAF7E',
          dark: '#4A6E4C',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 