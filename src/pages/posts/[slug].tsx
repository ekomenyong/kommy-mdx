import { ParsedUrlQuery } from 'querystring';
import { NextSeo, ArticleJsonLd, DefaultSeo } from 'next-seo';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts, Post } from 'contentlayer/generated';
import components from '../../components/MDXComponents';

import PostLayout from '@/layouts/singlePost';
import { WebWrapper } from '@/components';
import config from '@/config/site';

type PostProps = {
  post: Post;
};
export default function SinglePost({ post }: PostProps) {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <WebWrapper>
      <NextSeo
        title={
          post.seoTitle && post.seoTitle !== post.title
            ? `${post.seoTitle}`
            : `${post.title}`
        }
        description={
          post.seoDescription && post.seoDescription !== post.summary
            ? `${post.seoDescription}`
            : `${post.summary}`
        }
        canonical={`https://ekomenyong.com/posts/${post.slug}`}
        openGraph={{
          title:
            post.seoTitle && post.seoTitle !== post.title
              ? `${post.seoTitle}`
              : `${post.title}`,
          description:
            post.seoDescription && post.seoDescription !== post.summary
              ? `${post.seoDescription}`
              : `${post.summary}`,
          url: `https://ekomenyong.com/posts/${post.slug}`,
          type: 'article',
          article: {
            publishedTime: `${post.publishedAt}`,
            modifiedTime: `${post.lastmod}`,
            tags: [`${post.tags}`],
          },
          images: [
            {
              url: `https://ekomenyong.com${post.coverImage}`,
              alt: `Blog post cover photo for ${post.title}`,
              width: 1200,
              height: 600,
            },
          ],
        }}
        twitter={{
          handle: '@EkomEnyong',
          site: '@EkomEnyong',
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        url={`https://ekomenyong.com/posts/${post.slug}`}
        title={
          post.seoTitle && post.seoTitle !== post.title
            ? `${post.seoTitle}`
            : `${post.title}`
        }
        headline={`${post.title}`}
        images={[`https://ekomenyong.com${post.coverImage}`]}
        datePublished={`${post.publishedAt}`}
        dateModified={`${post.lastmod}`}
        publisherLogo={`${config.avatar}`}
        authorName={`${config.author}`}
        description={
          post.seoDescription && post.seoDescription !== post.summary
            ? `${post.seoDescription}`
            : `${post.summary}`
        }
      />
      <PostLayout post={post}>
        <MDXComponent components={components} />
      </PostLayout>
    </WebWrapper>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: ParsedUrlQuery }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}
