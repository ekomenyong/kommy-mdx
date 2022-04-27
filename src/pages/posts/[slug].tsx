import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts, type Post } from 'contentlayer/generated';
import { ParsedUrlQuery } from 'querystring';

import { WebWrapper } from '@/components';
import components from 'src/components/MDXComponents';
import PostLayout from '@/layouts/PostLayout';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { config } from '@/config';

type SinglePostProps = {
  post: Post;
};
const SinglePost = ({ post }: SinglePostProps) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <WebWrapper>
      <NextSeo
        title={
          post.seo_title && post.seo_title !== post.title
            ? `${post.seo_title} | EkomEnyong.com`
            : `${post.title} | EkomEnyong.com`
        }
        description={
          post.seo_description && post.seo_description !== post.summary
            ? `${post.seo_description}`
            : `${post.summary}`
        }
        canonical={`https://ekomenyong.com/posts/${post.slug}`}
        openGraph={{
          title:
            post.seo_title && post.seo_title !== post.title
              ? `${post.seo_title} | EkomEnyong.com`
              : `${post.title} | EkomEnyong.com`,
          description:
            post.seo_description && post.seo_description !== post.summary
              ? `${post.seo_description}`
              : `${post.summary}`,
          url: `https://ekomenyong.com/posts/${post.slug}`,
          type: 'article',
          site_name: 'EkomEnyong.com',
          locale: 'en_US',
          article: {
            publishedTime: `${post.publish_date}`,
            modifiedTime: `${post.last_modified}`,
            tags: [`${post.tags}`],
          },
          images: [
            {
              url: `https://ekomenyong.com${post.cover_image}`,
              alt: `Blog post cover photo for ${post.title}`,
              width: 1200,
              height: 600,
            },
          ],
        }}
        twitter={{
          handle: config.seo.twitter.handle,
          site: config.seo.twitter.site,
          cardType: config.seo.twitter.cardType,
        }}
      />
      <ArticleJsonLd
        url={`https://ekomenyong.com/posts/${post.slug}`}
        title={
          post.seo_title && post.seo_title !== post.title
            ? `${post.seo_title} | EkomEnyong.com`
            : `${post.title} | EkomEnyong.com`
        }
        headline={`${post.title}`}
        images={[`https://ekomenyong.com${post.cover_image}`]}
        datePublished={`${post.publish_date}`}
        dateModified={`${post.last_modified}`}
        publisherLogo={`${config.site.avatar}`}
        authorName={`${config.site.name}`}
        description={
          post.seo_description && post.seo_description !== post.summary
            ? `${post.seo_description}`
            : `${post.summary}`
        }
      />
      {post.draft !== true && (
        <PostLayout post={post}>
          <MDXComponent components={components} />
        </PostLayout>
      )}
    </WebWrapper>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: ParsedUrlQuery }) {
  const post = allPosts.find(
    (post) => post.slug === params.slug && post.draft !== true
  );

  return {
    props: {
      post,
    },
  };
}
