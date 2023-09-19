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
        base: "rgba(101, 65, 13, 1)",
        Title: "rgba(35, 21, 2, 1)"
      },
      fontSize: {
        heading: "2.8rem"
      },
      width: {
        test: "140rem"
      }
    },
  },
  plugins: [],

  
}
export default config