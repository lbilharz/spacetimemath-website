import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const templatePath = toAbsolute('dist/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

const supportedLangs = ['en', 'de', 'es', 'fr', 'tr', 'uk', 'zh', 'ar', 'nl'];
const baseRoutes = ['/', '/impressum', '/datenschutz'];

let routesToPrerender = ['/']; // Keep base root

for (const lang of supportedLangs) {
  for (const route of baseRoutes) {
    routesToPrerender.push(`/${lang}${route === '/' ? '' : route}`);
  }
}

async function build() {
  let render;
  try {
    const entryPath = fs.existsSync(toAbsolute('dist/server/entry-server.js')) 
      ? toAbsolute('dist/server/entry-server.js')
      : toAbsolute('dist/ssr/entry-server.js');
    const entry = await import(entryPath);
    render = entry.render;
  } catch (e) {
    console.error('Could not load SSR entry. Make sure you build it first.', e);
    process.exit(1);
  }

  for (const url of routesToPrerender) {
    const appHtml = render(url);
    
    // Inject rendered HTML into template
    const html = template.replace(
      `<!--ssr-outlet-->`,
      appHtml
    ).replace(
      `<div id="root"></div>`,
      `<div id="root">${appHtml}</div>`
    );

    let filePath;
    if (url === '/') {
      filePath = 'dist/index.html';
    } else {
      filePath = `dist${url}/index.html`;
    }
    
    const absoluteFilePath = toAbsolute(filePath);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(absoluteFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(absoluteFilePath, html);
    console.log(`pre-rendered ${filePath}`);
  }
}

build();
