/**
 * WEBSITE SETTINGS
 * This configuration file provides the default settings.
 */

export const config = {
	site: {
		name: 'Ekom Enyong', // Will be displayed in header if no logo declared
		sitename: 'EkomEnyong.com',
		url: 'https://ekomenyong.com',
		description:
			'My name is Ekom Enyong and I create modern digital experiences for humans using seo, content, design, and code.',
		repo: 'https://github.com/ekomenyong/kommy-mdx',
		author: 'Ekom Enyong',
		avatar: 'https://ekomenyong.com/images/ekom-enyong-headshot.jpeg',
		lang: 'en_US',
		plausibleDataDomain: 'ekomenyong.com', // e.g. yourdomain.com
	},
	contact: {
		email: 'hello@ekomenyong.com', // Email address to be used for contact
		github: 'https://github.com/ekomenyong', // Github profile URL
		linkedin: 'https://linkedin.com/in/ekomenyong', // LinkedIn profile URL
		twitter: 'https://twitter.com/ekomenyong',
		polywork: 'https://www.polywork.com/ekomenyong',
	},
	seo: {
		title: 'EkomEnyong.com | Digital Creative » SEO, Content, Design, and Development',
		defaultTitle: 'Digital Creative » SEO, Design, and Development',
		description:
			'My name is Ekom Enyong and I create modern digital experiences for humans using seo, content, design, and code.',
		canonical: 'https://ekomenyong.com',
		locale: 'en_US',
		openGraph: {
			url: 'https://ekomenyong.com',
			title: 'Ekom Enyong Digital Creative » SEO, Content, Design, and Development',
			description:
				'My name is Ekom Enyong and I create modern digital experiences for humans using seo, content, design, and code.',
			type: 'website',
		},
		twitter: {
			handle: '@EkomEnyong',
			site: '@EkomEnyong',
			cardType: 'summary_large_image',
		},
		image: 'https://ekomenyong.com/images/og-default.jpg',
	},
};
