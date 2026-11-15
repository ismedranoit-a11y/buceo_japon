// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE ?? 'https://www.buceojapon.com',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
