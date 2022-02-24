import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import dayjs from 'dayjs';

import { allPosts } from 'contentlayer/generated';
import { pick } from '@/utils/contentlayer';

import {
  Contact,
  KommyLink,
  SectionContainer,
  SectionHeader,
  Tag,
  WebWrapper,
} from '@/components';
import { RiArrowRightLine } from 'react-icons/ri';

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) => {
    const concat = post.title + post.summary + post.tags + post.seoDescription;
    return concat.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <WebWrapper>
      <NextSeo
        title="Sincerely, Kommy Digital » Development Blog"
        description="Read my most recent thoughts on design, development, user experience, marketing, and all things digital."
      />
      <SectionContainer>
        <div className="pt-20 pb-12">
          <h1 className="mb-8 text-4xl font-medium uppercase md:text-6xl">
            Sincerely, <span className="font-bold">Kommy Digital:</span>{' '}
            <span className="italic font-normal">The blog</span>
          </h1>
          <p className="max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            This blog explores the wandering mind of a seasoned marketing
            professional and evolving digital creative. Read my most recent
            thoughts on design, development, user experience, marketing, and all
            things digital.
          </p>
        </div>
        <div className="relative w-2/3 mb-4 ">
          <input
            aria-label="Search all posts"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search all posts"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md outline-primary-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
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
      </SectionContainer>
      <SectionContainer>
        <hr className="my-20" />
        {!filteredBlogPosts.length && <p>No posts found.</p>}

        <SectionHeader section="posts" title="My latest writings" />

        {filteredBlogPosts.map((post) => (
          <div
            key={post._id}
            className="flex flex-col pt-8 space-x-0 md:flex-row md:items-baseline md:justify-start md:space-x-4"
          >
            <p className="text-sm italic text-gray-500 basis-1/6 dark:text-gray-300">
              <span>{dayjs(post.publishedAt).format('MMMM DD, YYYY')}</span>
            </p>
            <div className="max-w-3xl">
              <KommyLink href={`/posts/${post.slug}`} className="block mt-2 ">
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
        <hr className="mt-20" />
      </SectionContainer>
      <Contact />
    </WebWrapper>
  );
}

export async function getStaticProps() {
  const posts = await allPosts
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'summary',
        'tags',
        'publishedAt',
        'body',
        'seoDescription',
        '_id',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return { props: { posts } };
}
