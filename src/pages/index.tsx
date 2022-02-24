import type { InferGetStaticPropsType } from 'next';
import dayjs from 'dayjs';
import { NextSeo } from 'next-seo';

import {
  Contact,
  Hero,
  KommyLink,
  SectionContainer,
  SectionHeader,
  Tag,
  WebWrapper,
} from '@/components';
import { allPosts } from 'contentlayer/generated';
import { pick } from '@/utils/contentlayer';
import { RiArrowRightLine } from 'react-icons/ri';

const projects = [
  {
    title: 'Hyper Ethos',
    description:
      'Web design and development for an independent creative collective',
    imageUrl: '/images/event.jpg',
    slug: '#',
  },
  {
    title: 'Hyper Ethos',
    description:
      'Web design and development for an independent creative collective',
    imageUrl: '/images/event.jpg',
    slug: '#',
  },
  {
    title: 'Hyper Ethos',
    description:
      'Web design and development for an independent creative collective',
    imageUrl: '/images/event.jpg',
    slug: '#',
  },
];

const MAX_PROJECT_DISPLAY = 3;
const MAX_DISPLAY = 5;

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <WebWrapper>
      <NextSeo
        title="Digital Creative, SEO, Design, and Development"
        titleTemplate="Ekom Enyong | %s"
      />
      {/* Hero */}
      <Hero />
      {/* Projects */}
      {/* <SectionContainer>
        <div className="py-20">
          <SectionHeader
            section="projects"
            title="Ethical digital experiences focused on your end-users"
          />
          <div className="grid items-center justify-center grid-flow-row grid-cols-1 mb-20 auto-rows-fr gap-x-6 gap-y-16 lg:grid-cols-3">
            {projects.slice(0, MAX_PROJECT_DISPLAY).map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                imageUrl={p.imageUrl}
                slug={p.slug}
              />
            ))}
          </div>
          <KommyLink
            href="/projects"
            className="inline-flex items-center justify-center px-4 py-1 mt-8 text-lg font-medium tracking-wider text-white uppercase bg-gray-900 border border-transparent rounded shadow-sm bg-accent whitespace-nowrap hover:underline dark:border-white dark:hover:bg-transparent"
          >
            View all projects <RiArrowRightLine className="w-6 h-6 ml-4" />
          </KommyLink>
        </div>
        <hr />
      </SectionContainer> */}
      {/* Blog */}
      <SectionContainer>
        <div className="py-20">
          <SectionHeader
            section="blog"
            title="Sincerely, Kommy Digital: The Blog"
          />
          <p className="max-w-2xl mb-4 text-xl text-gray-700 dark:text-gray-300">
            Read my most recent thoughts on the latest trends in design,
            development, user experience, marketing, and all things digital.
          </p>
          <hr />
          <div className="grid grid-cols-1 gap-16 mb-8 divide-y gap-y-12">
            {posts.slice(0, MAX_DISPLAY).map((post) => (
              <div
                key={post._id}
                className="flex flex-col pt-8 space-x-0 md:flex-row md:items-baseline md:justify-start md:space-x-4"
              >
                <p className="text-sm italic text-gray-500 basis-1/6 dark:text-gray-300">
                  <span>{dayjs(post.publishedAt).format('MMMM DD, YYYY')}</span>
                </p>
                <div className="max-w-3xl">
                  <KommyLink
                    href={`/posts/${post.slug}`}
                    className="block mt-2 "
                  >
                    <h3 className="text-3xl font-medium text-gray-900 uppercase hover:underline dark:text-white">
                      {post.title}
                    </h3>
                  </KommyLink>

                  <div className="pt-2">
                    <div className="flex flex-wrap">
                      {post.tags.map((tag: string) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>

                  <p className="max-w-2xl my-4 text-lg leading-normal text-gray-700 dark:text-gray-300">
                    {post.summary}
                  </p>
                  <KommyLink
                    href={`/posts/${post.slug}`}
                    className="inline-flex items-center justify-start text-base font-medium text-gray-800 uppercase hover:underline dark:text-gray-300"
                    aria-label={`Read "${post.title}"`}
                  >
                    Read more <RiArrowRightLine className="w-6 h-6 ml-2" />
                  </KommyLink>
                </div>
              </div>
            ))}
          </div>
          <KommyLink
            href="/posts"
            className="inline-flex items-center justify-center px-4 py-1 mt-8 text-lg font-medium tracking-wider text-white uppercase bg-gray-900 border border-transparent rounded shadow-sm bg-accent whitespace-nowrap hover:underline dark:border-white dark:hover:bg-transparent"
          >
            View All Posts <RiArrowRightLine className="w-6 h-6 ml-4" />
          </KommyLink>
        </div>
        <hr />
      </SectionContainer>
      {/* Contact */}
      <Contact />
    </WebWrapper>
  );
};

export default Home;

export function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'tags', 'publishedAt', '_id'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return { props: { posts } };
}
