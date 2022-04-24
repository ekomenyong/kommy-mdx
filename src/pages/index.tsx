import dayjs from 'dayjs';
import {
  AboutSection,
  ContactSection,
  Container,
  HeroSection,
  KommyLink,
  WebWrapper,
} from '@/components';

import { allPosts } from 'contentlayer/generated';
import { pick } from 'contentlayer/client';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { config } from '@/config';

const MAX_DISPLAY = 3;

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <WebWrapper color="bg-pink-100">
      <NextSeo
        title={config.seo.title}
        description={config.seo.description}
        canonical={config.seo.canonical}
        openGraph={{
          url: config.seo.openGraph.url,
          title: config.seo.openGraph.title,
          description: config.seo.openGraph.description,
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
        <HeroSection />
        <AboutSection />
        <Container>
          <div className="py-16">
            <div className="flex flex-col items-start justify-start lg:flex-row">
              <span className="max-w-sm pt-0 pb-4 mr-0 text-xl font-medium uppercase lg:pb-0 lg:pt-4 lg:mr-40 lg:w-28">
                insights
              </span>
              <div className="flex flex-col items-start">
                <h1 className="max-w-sm mb-8 text-5xl font-medium uppercase lg:max-w-3xl lg:text-9xl">
                  latest thoughts
                </h1>

                <div className="max-w-3xl divide-y">
                  {posts.slice(0, MAX_DISPLAY).map((post, index) => (
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
                <div className="pt-8">
                  <KommyLink
                    href="/posts"
                    className="text-xl font-medium uppercase lg:text-2xl animated-underline"
                  >
                    Read more posts <span className="pl-8">&rarr;</span>
                  </KommyLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <ContactSection />
      </Container>
    </WebWrapper>
  );
};

export default Home;

export function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      pick(post, [
        '_id',
        'slug',
        'title',
        'summary',
        'publish_date',
        'last_modified',
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
