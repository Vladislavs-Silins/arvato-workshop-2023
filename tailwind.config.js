module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        24: '6rem',
        64: '16rem',
      },
      colors: {
        gray: {
          200: '#EEEEEE',
          300: '#E0E0E0',
          600: '#757575',
        },
      },
      borderRadius: {
        default: '0.25rem',
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      fontSize: {
        bold: ['0.875rem', { lineHeight: '1.25rem' }],
      },
      padding: {
        8: '2rem',
      },
      margin: {
        8: '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
