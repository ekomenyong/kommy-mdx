import config from '@/config/site';
import Script from 'next/script';
const PlausibleScript = () => {
  return (
    <Script
      strategy="lazyOnload"
      defer
      data-domain={`${config.plausibleDataDomain}`}
      src="https://plausible.io/js/plausible.js"
    />
  );
};

export default PlausibleScript;
