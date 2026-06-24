import { detect } from 'detect-browser';

const browser = detect() ?? { name: undefined };

export default browser;
