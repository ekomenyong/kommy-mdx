import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { allPosts } from 'contentlayer/generated';
import { pick } from 'contentlayer/client';
import { Container, KommyLink, WebWrapper } from '@/components';
import dayjs from 'dayjs';
import { config } from '@/config';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) => {
    const concat = post.title + post.summary + post.tags;
    return concat.toLowerCase().includes(searchValue.toLowerCase());
  });

  const SEO_TITLE =
    'From the Desk of Ekom Enyong » Digital, Design, Development Blog';
  const SEO_DESCRIPTION =
    'Explore the wandering mind of a seasoned marketing professional and evolving creative developer. Topics include design, development, and all things digital.';
  const router = useRouter();
  const CANONICAL_SLUG = router.pathname;
  console.log(CANONICAL_SLUG);
  return (
    <WebWrapper color="bg-lime-100">
      <NextSeo
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        canonical={`${config.seo.canonical}${CANONICAL_SLUG}`}
        openGraph={{
          url: config.seo.openGraph.url,
          title: SEO_TITLE,
          description: SEO_DESCRIPTION,
          type: config.seo.openGraph.type,
          site_name: config.site.sitename,
          images: [
            {
              url: config.seo.image,
              width: 1200,
              height: 630,
              alt: `Cover image for ${config.site.sitename}`,
            },
          ],
        }}
        twitter={{
          handle: config.seo.twitter.handle,
          site: config.seo.twitter.site,
          cardType: config.seo.twitter.cardType,
        }}
      />
      <Container>
        <div className="flex flex-col items-start justify-start pt-40 lg:flex-row">
          <span className="max-w-sm pt-0 pb-4 mr-0 text-xl font-medium uppercase lg:pb-0 lg:pt-4 lg:mr-40 lg:w-28">
            insights
          </span>
          <div className="flex flex-col items-start">
            <h2 className="max-w-sm mb-8 text-5xl font-medium uppercase lg:max-w-2xl lg:text-9xl">
              latest thoughts
            </h2>
            <div className="max-w-2xl mb-4 space-y-6 text-2xl">
              <p>
                Explore the wandering mind of a seasoned marketing professional and
                evolving creative developer. Topics include design, development,
                marketing, and all things digital.
              </p>
            </div>
            <div className="relative w-full mb-4">
              <input
                aria-label="Search all posts"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search all posts"
                className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md outline-warning-500 focus:border-warning-500 focus:ring-warning-500"
              />
              <svg
                className="absolute w-5 h-5 text-gray-500 right-3 top-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="flex flex-col items-start justify-start lg:flex-row">
            <span className="max-w-sm pt-0 pb-4 mr-0 text-xl font-medium uppercase lg:pb-0 lg:pt-4 lg:mr-40 lg:w-28"></span>
            <div className="flex flex-col items-start">
              <div className="max-w-2xl divide-y">
                {!filteredBlogPosts.length && (
                  <p className="font-medium uppercase">
                    Sorry, no posts were found. Please try your search again.
                  </p>
                )}
                {filteredBlogPosts.map((post, index) => (
                  <div key={index} className="py-4">
                    <p className="text-base text-gray-600">
                      <time
                        dateTime={
                          post.last_modified &&
                          post.last_modified !== post.publish_date
                            ? post.last_modified
                            : post.publish_date
                        }
                      >
                        {dayjs(
                          post.last_modified &&
                            post.last_modified !== post.publish_date
                            ? post.last_modified
                            : post.publish_date
                        ).format('MMMM DD, YYYY')}
                      </time>
                    </p>
                    <KommyLink href={`/posts/${post.slug}`} className="mt-2">
                      <h3 className="inline text-2xl font-medium uppercase animated-underline">
                        {post.title}
                      </h3>
                    </KommyLink>
                    <p className="mt-3 text-xl text-gray-600">{post.summary}</p>
                    <div className="mt-3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </WebWrapper>
  );
};

export default Posts;
export async function getStaticProps() {
  const posts = await allPosts
    .map((post) =>
      pick(post, [
        '_id',
        'title',
        'slug',
        'summary',
        'publish_date',
        'last_modified',
        'body',
        'tags',
        'draft',
      ])
    )
    .filter((post) => post.draft === false)
    .sort(
      (a, b) => Number(new Date(b.last_modified)) - Number(new Date(a.last_modified))
    );
  return {
    props: { posts },
  };
}
