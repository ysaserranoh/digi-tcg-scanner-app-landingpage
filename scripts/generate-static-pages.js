import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

// All SPA routes that need static HTML files for GitHub Pages (200 instead of 404)
const routes = [
  'privacy-policy',
  'account-deletion',
  'data-deletion',
  'terms-of-service',
  'features',
  'download',
  'contact'
];

routes.forEach(route => {
  const routeDir = join(distDir, route);
  if (!existsSync(routeDir)) {
    mkdirSync(routeDir, { recursive: true });
  }
  writeFileSync(join(routeDir, 'index.html'), indexHtml);
});

console.log(`Static pages generated for: ${routes.join(', ')}`);
