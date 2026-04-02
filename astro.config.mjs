import { defineConfig } from 'astro/config';

export default defineConfig({
  // site en base worden ingesteld door de GitHub Actions workflow.
  // Lokaal draaien: npm run dev (links werken via localhost)
  // Productie met eigen domein: voeg hier toe:
  //   site: 'https://openspraaktechnologie.org',
});
