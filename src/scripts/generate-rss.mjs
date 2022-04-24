import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allPosts } from '../../.contentlayer/generated/index.mjs';

async function generate() {
	const feed = new RSS({
		title: 'Ekom Enyong',
		site_url: 'https://www.ekomenyong.com',
		feed_url: 'https://www.ekomenyong.com/feed.xml',
		description:
			'My name is Ekom Enyong and I create modern digital experiences for humans using seo, content, design, and code.',
	});
	allPosts.map((post) => {
		feed.item({
			title: post.title,
			url: `https://www.ekomenyong.com/posts/${post.slug}`,
			date: post.publish_date,
			description: post.summary,
			categories: [post.tags],
		});
	});
	writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
generate();
