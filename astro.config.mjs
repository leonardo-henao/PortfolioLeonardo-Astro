import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

import react from '@astrojs/react';
import lottie from 'astro-integration-lottie';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), tailwind(), partytown({ config: { debug: false } }), lottie()],
  site: 'https://leonardohenao.com',
});
