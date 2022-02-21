import '@/styles/tailwind.css';
import '@/styles/prism.css';

import config from '@/config/site';
import SEO from '@/config/seo';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@/components';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={`${config.defaultTheme}`}>
      {isProduction && config.plausibleDataDomain && <Analytics />}
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
