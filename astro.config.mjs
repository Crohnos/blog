import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://crohnos.github.io',
    base: '/blog',
    integrations: [react()],
});