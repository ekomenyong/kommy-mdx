import { PropsWithChildren } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

import {
  KommyLink,
  PostTitle,
  SectionContainer,
  SocialShare,
  TableOfContents,
  Tag,
} from '@/components';

import { Post } from 'contentlayer/generated';

export default function PostLayout({
  children,
  post,
}: PropsWithChildren<{ post: Post }>) {
  return (
    <SectionContainer>
      <article>
        <div className="">
          {/* POST HEADER */}
          <header className="my-20">
            <div className="space-y-1 text-center">
              <div className="space-y-10">
                <div>
                  <span className="sr-only">Published on</span>
                  <div className="space-x-2 text-lg leading-6 text-gray-500 dark:text-gray-300">
                    {post.lastmod ? (
                      <span className="italic">
                        Post updated on{' '}
                        {dayjs(post.lastmod).format('MMMM DD, YYYY')}
                      </span>
                    ) : (
                      <span className="italic">
                        Published on{' '}
                        {dayjs(post.publishedAt).format('MMMM DD, YYYY')}
                      </span>
                    )}
                    <span aria-hidden="true">•</span>
                    <span>{post.readingTime.text}</span>
                  </div>
                </div>
              </div>
              <div>
                <PostTitle>{post.title}</PostTitle>
                <p className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-300">
                  {post.summary}
                </p>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            {/* AUTHOR  */}
            <div className="pt-6 pb-8 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-600">
              <span className="sr-only">Author</span>
              <div className="flex flex-col items-start justify-center space-x-0 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                <h3 className="text-base font-medium tracking-wide underline uppercase text-primary-600 dark:text-gray-200">
                  Author info
                </h3>
                <div className="flex items-start justify-start mt-6">
                  <div className="flex-shrink-0">
                    <span className="sr-only">Ekom Enyong</span>
                    <Image
                      className="rounded-full"
                      src="/images/ekom-enyong-headshot.jpeg"
                      height={52}
                      width={52}
                      objectFit="cover"
                      objectPosition="center center"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <span className="text-gray-800 uppercase dark:text-gray-100">
                      <span className="font-bold">Ekom</span>
                      <span className="italic font-normal">Enyong</span>
                    </span>
                    <div className="flex text-sm text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <KommyLink
                        href="https://twitter.com/EkomEynong"
                        className="text-base font-normal text-gray-600 underline hover:underline dark:text-gray-200"
                        showIcon={false}
                      >
                        @EkomEnyong
                      </KommyLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              {/* MOBILE TABLE OF CONTENTS */}
              <div className="block xl:hidden">
                <TableOfContents source={post.body.raw} />
              </div>

              {/* POST CONTENTS */}
              <div className="max-w-4xl pt-10 pb-8 prose prose-lg prose-headings:font-medium prose-headings:uppercase prose-blockquote:font-normal prose-strong:font-medium dark:prose-dark dark:prose-headings:font-medium dark:prose-blockquote:font-normal md:prose-xl">
                {children}
              </div>

              {/* POST TAGS */}
              <div>
                {post.tags && (
                  <div className="py-4 xl:py-8">
                    <h3 className="mb-4 text-sm font-medium text-gray-700 uppercase dark:text-gray-400">
                      TAGS
                    </h3>
                    <div className="flex flex-wrap">
                      {post.tags.map((tag: string) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR COMPONENTS */}
            <aside>
              {/* DESKTOP TABLE OF CONTENTS */}
              <div className="hidden xl:block">
                <TableOfContents source={post.body.raw} />
              </div>
              {/* SOCIAL SHARE WIDGET */}
              <SocialShare title={post.title} />
              <hr />
              <div className="pt-4 xl:pt-8">
                <KommyLink
                  href="/posts"
                  className="text-lg font-medium uppercase text-primary-600 hover:underline dark:text-white"
                >
                  &larr; Back to the blog
                </KommyLink>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
