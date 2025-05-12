import type { AppProps } from 'next/app';
import '../styles/globals.css';

// Import scheduler only on the server side
if (typeof window === 'undefined') {
  import('../utils/scheduler')
    .catch(error => console.error('Failed to load scheduler:', error));
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
} 