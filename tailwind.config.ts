import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        'bg-elev': '#141414',
        'bg-elev-2': '#1a1a1a',
        text: '#F5F5F0',
        muted: '#8A8A85',
        gold: '#E0B040',
        'gold-bright': '#F3C657',
        'gold-dim': '#8a6d28',
        footer: '#050505',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-ibm-sans)', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
