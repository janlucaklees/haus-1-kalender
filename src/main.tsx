import { createRoot } from 'react-dom/client';

import App from './App';
import './i18n';
import './reset.css';
import './global.css';

const rootElement = document.getElementById('react-root');

if (rootElement === null) {
	throw new Error('Missing #react-root element.');
}

createRoot(rootElement).render(<App />);
