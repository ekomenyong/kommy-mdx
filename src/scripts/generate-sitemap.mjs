import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('prettier.config.js');
  const pages = await globby([
    'src/pages/**/*.tsx',
    'data/**/*.mdx',
    '!src/pages/404.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/posts/[slug].tsx',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('src/pages', '')
            .replace('data', '')
            .replace(/(\d{4})-(\d{2})-(\d{2})-/g, '')
            .replace('.tsx', '')
            .replace('.mdx', '');
          const route = path === '/index' ? '' : path;
          return `
            <url>
                <loc>${`https://ekomenyong.com${route}`}</loc>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
  </urlset>
  `;
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);
}

generate();
