import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), tailwind(), partytown({ config: { debug: false } })],
  site: 'https://leonardohenao.com',
});
