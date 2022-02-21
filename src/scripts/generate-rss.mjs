import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allPosts } from '../../.contentlayer/generated/index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Ekom Enyong',
    site_url: 'https://www.ekomenyong.com',
    feed_url: 'https://www.ekomenyong.com/feed.xml',
  });
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://www.ekomenyong.com/posts/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
      categories: [post.tags],
    });
  });
  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}
generate();
