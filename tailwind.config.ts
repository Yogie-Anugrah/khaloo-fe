import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1920px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'testing-1':
          'radial-gradient(70% 180% at 50% 50%, #F8994E 33.52%, #AF2D6D 100%)',
        'testing-2':
          'radial-gradient(70% 180% at 50% 50%, #F8994E 33.52%, #872957 100%)',
      },
      colors: {
        'gray-1': '#434242',
        'gray-2': '#7A7979',
        'gray-3': '#D2D1D1',
        'gray-4': '#F4F4F4',
        'primary-1': '#F9994C',
        'primary-2': '#AF2D6D',
        'primary-3': '#FFD700',
        'primary-4': '#F39284',
        'primary-5': '#C19E8A',
        'primary-6': '#F59EBB',
        'secondary-1': '#F26A2A',
        'accent-1': '#6E9A73',
      },
    },
  },
  plugins: [],
};
export default config;
