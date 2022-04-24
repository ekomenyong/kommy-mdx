import { PropsWithChildren } from 'react';
import dayjs from 'dayjs';
import { Post } from 'contentlayer/generated';

import {
  Container,
  SocialShare,
  PostTitle,
  TableOfContents,
  Tag,
  AuthorCard,
  KommyLink,
} from '@/components';
import { RiArrowLeftLine } from 'react-icons/ri';

const PostLayout = ({ children, post }: PropsWithChildren<{ post: Post }>) => {
  return (
    <Container>
      <article>
        <div className="mx-auto mt-32 mb-16">
          <header className="flex flex-col items-start justify-start mb-8 text-center lg:mb-16">
            <div className="">
              {/* PAGE TITLE / SUMMARY */}
              {/* DATE / READING TIME */}
              <div className="pt-8 pb-4 uppercase">
                <span className="sr-only">Published on</span>
                <div className="space-x-2 text-sm italic leading-6 text-gray-600 lg:text-base">
                  {post.last_modified && post.last_modified !== post.publish_date ? (
                    <time dateTime={post.last_modified}>
                      Post updated on{' '}
                      {dayjs(post.last_modified).format('MMMM DD, YYYY')}
                    </time>
                  ) : (
                    <time dateTime={post.publish_date}>
                      Published on {dayjs(post.publish_date).format('MMMM DD, YYYY')}
                    </time>
                  )}
                  <span aria-hidden="true">•</span>
                  <span>{post.readingTime.text}</span>
                </div>
              </div>
              <div>
                <PostTitle>{post.title}</PostTitle>
                <p className="max-w-2xl mx-auto text-base text-gray-700 lg:text-xl">
                  {post.summary}
                </p>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="pt-6 pb-4 lg:py-0 lg:border-b lg:border-gray-300">
              <hr className="pt-4 lg:hidden" />
              <span className="sr-only">Author</span>
              <div className="flex flex-col items-start justify-center space-x-0 sm:space-x-12 lg:hidden lg:space-x-0">
                <h3 className="text-base font-medium tracking-wide text-gray-800 uppercase">
                  Author info
                </h3>
                <AuthorCard />
              </div>
            </div>
            <div className="divide-y divide-gray-200 lg:col-span-3 lg:row-span-2 lg:pb-0">
              {/* MOBILE TABLE OF CONTENTS */}
              <div className="block lg:hidden">
                <TableOfContents source={post.body.raw} />
              </div>

              {/* POST CONTENTS */}
              <div className="max-w-3xl pt-10 pb-8 prose prose-lg prose-ul:pl-14 prose-headings:font-medium prose-headings:uppercase prose-blockquote:font-normal prose-strong:font-medium">
                {children}
              </div>

              {/* POST TAGS */}
              <div>
                {post.tags && (
                  <div className="py-4 lg:py-8">
                    <h3 className="mb-4 text-sm font-medium text-gray-800 uppercase">
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
            <aside className="">
              {/* DESKTOP TABLE OF CONTENTS */}
              <div className="hidden lg:block lg:sticky lg:top-32">
                <div className="pt-6 pb-4 lg:border-b lg:border-gray-300">
                  <hr className="pt-4 lg:hidden" />
                  <span className="sr-only">Author</span>
                  <div className="flex flex-col items-start justify-center space-x-0 sm:space-x-12 lg:block lg:space-x-0">
                    <h3 className="text-base font-medium tracking-wide text-gray-800 uppercase">
                      Author info
                    </h3>
                    <AuthorCard />
                  </div>
                </div>
                <TableOfContents source={post.body.raw} />
                <SocialShare title={post.title} slug={post.slug} />
                <hr />
                <div className="pt-4 lg:pt-8">
                  <KommyLink
                    href="/posts"
                    className="flex flex-row items-center justify-start text-lg font-medium text-gray-800 uppercase flex-nowrap hover:underline"
                  >
                    <RiArrowLeftLine className="mr-4" /> Back to all posts
                  </KommyLink>
                </div>
              </div>
              {/* SOCIAL SHARE WIDGET */}
              <div className="lg:hidden">
                <SocialShare title={post.title} slug={post.slug} />
                <hr />
                <div className="pt-4 lg:pt-8">
                  <KommyLink
                    href="/posts"
                    className="flex flex-row items-center justify-start text-lg font-medium text-gray-800 uppercase flex-nowrap hover:underline"
                  >
                    <RiArrowLeftLine className="mr-4" /> Back to all posts
                  </KommyLink>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default PostLayout;
