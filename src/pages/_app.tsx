import type { AppProps } from 'next/app';
import { config } from '@/config';
import { Analytics } from '@/components';

import '@/styles/tailwind.css';
import '@/styles/prism.css';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{isProduction && config.site.plausibleDataDomain && <Analytics />}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
