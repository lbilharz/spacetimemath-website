
import { renderToString } from 'react-dom/server';
import App from './App';
import './i18n';

export function render(url: string) {
  return renderToString(<App ssrPath={url} />);
}
