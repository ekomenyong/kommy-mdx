import type { AppProps } from 'next/app';
import { config } from '@/config';
import PlausibleProvider from 'next-plausible';

import '@/styles/tailwind.css';
import '@/styles/prism.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain={config.site.plausibleDataDomain}>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
