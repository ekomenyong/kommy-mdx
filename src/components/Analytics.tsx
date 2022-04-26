import { config } from '@/config';
import Script from 'next/script';
const Analytics = () => {
  return (
    <Script
      strategy="lazyOnload"
      data-domain={config.site.plausibleDataDomain}
      src="/js/script.js"
    />
  );
};

export default Analytics;
