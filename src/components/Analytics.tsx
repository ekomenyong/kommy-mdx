import { config } from '@/config';
import Script from 'next/script';
const PlausibleScript = () => {
	return (
		<Script
			strategy="lazyOnload"
			defer
			data-domain={`${config.site.plausibleDataDomain}`}
			src="https://plausible.io/js/plausible.js"
		/>
	);
};

export default PlausibleScript;
