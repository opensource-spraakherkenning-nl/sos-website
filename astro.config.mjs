import { defineConfig } from 'astro/config';

export default defineConfig({
  // Test-URL via GitHub Pages:
  site: 'https://roelandordelman.github.io',
  base: '/sos-website',

  // Zodra het domein is gekoppeld, vervang bovenstaande door:
  // site: 'https://openspraaktechnologie.org',
  // (en verwijder de base regel)
});
