import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ember: '#8c2f1b',
        clay: '#a46038',
        turmeric: '#d6a13d',
        soot: '#151311',
        ash: '#f1e5d1',
        leaf: '#33443c',
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'smoke-gradient':
          'radial-gradient(circle at top, rgba(214, 161, 61, 0.25), transparent 35%), radial-gradient(circle at 80% 20%, rgba(140, 47, 27, 0.4), transparent 30%), linear-gradient(135deg, #151311 0%, #231814 50%, #40261d 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
