import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        base: 'rgba(101, 65, 13, 1)',
        Title: 'rgba(35, 21, 2, 1)',
        brown: 'rgba(90, 78, 60, 1)',
        boardbrown: 'rgba(51, 36, 13, 1)',
        boardgray: 'rgba(129, 119, 106, 1)',
        arrow: 'rgba(138, 87, 14, 1)',
        gray: 'rgba(206, 203, 199, 1)',
        gray200: 'rgba(129, 119, 106, 1)',
        gray300: '#81776A',
      },
      fontSize: {
        heading: '2.8rem',
        md: '1rem',
      },
    },
  },

  plugins: [],
}
export default config
