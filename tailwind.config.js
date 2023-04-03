const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  // mode: "jit",
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        base: ['var(--font-source)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#005bb3',
              textDecoration: 'none',
              borderBottom: '1px solid ##005bb3',
              fontWeight: '400',
              '&:hover': {
                borderColor: '#005bb3',
              },
            },
            p: {
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '15.4px',
              fontWeight: '400',
            },
            h1: {
              fontWeight: '600',
            },
            'h2,h3': {
              scrollMarginTop: spacing[20],
              marginTop: '40px',
              marginBottom: '25px',
              lineHeight: '1.3333333',
              color: '#1a2c47',
              fontWeight: '600',
            },
            code: {
              fontSize: '14px',
              color: '#000',
              backgroundColor: '#e3e6e8',
              paddingLeft: '4px',
              fontWeight: '400',
              paddingRight: '4px',
              paddingTop: '3px',
              paddingBottom: '3px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            pre: {
              backgroundColor: '#f6f6f6',
              color: '#121212',
              maxHeight: '500px',
            },
            hr: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            ul: {
              lineHeight: '28px',
              fontSize: '16px',
            },
            'ul > li::marker': {
              color: '#808080',
            },
            'ol > li::marker': {
              color: '#808080',
            },
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
              color: '#525960',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::before': false,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
