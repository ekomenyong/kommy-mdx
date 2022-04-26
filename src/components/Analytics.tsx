import { config } from '@/config';
import Script from 'next/script';
const PlausibleScript = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        data-domain={config.site.plausibleDataDomain}
        src="https://plausible.io/js/plausible.js"
      />
      <Script strategy="lazyOnload" id="plausible">
        {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
      </Script>
    </>
  );
};

export default PlausibleScript;
