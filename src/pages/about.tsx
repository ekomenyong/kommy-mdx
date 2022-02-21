import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import {
  Contact,
  KommyLink,
  SectionContainer,
  SectionHeader,
  WebWrapper,
} from '@/components';
import Image from 'next/image';

const posts = [
  {
    title: '2022 React Developer Tools and Techstack',
    href: '#',
    description:
      "My 2022 design and React development tools I'm currently using. Plus, an exploration of what new tools and skills I'm exploring this year.",
    date: 'Mar 1, 2022',
    datetime: '2023-03-01',
    imageUrl: '/images/event.jpg',
    readingTime: '3 min',
    author: {
      name: 'Ekom Enyong',
      imageUrl: '/images/ekom-enyong-headshot.jpeg',
    },
  },
];
const About: NextPage = () => {
  return (
    <WebWrapper>
      <NextSeo
        title="About Ekom Enyong » Digital Creative & Next.js Developer"
        description="Ekom Enyong is a digital creative based in the United States. She creates ethical, modern digital products and experiences using seo, design, and code."
      />
      {/* Hero */}
      <SectionContainer>
        <div className="mx-auto max-w-3xl py-28 text-center">
          <p className="mb-2 text-xl font-medium uppercase italic tracking-wider text-gray-600 dark:text-gray-300">
            Meet ekom
          </p>
          <h1 className="mb-4 text-4xl font-medium uppercase md:text-5xl lg:text-6xl">
            I create digital{' '}
            <span className="font-bold">products and experiences</span> that
            help <span className="font-normal italic">push us all forward</span>
            .
          </h1>
        </div>
      </SectionContainer>
      {/* About */}
      <SectionContainer>
        <div className="mb-12 flex flex-col lg:mb-20 lg:flex-row lg:items-start lg:justify-between">
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/ekom-enyong-headshot.jpeg"
              height={330}
              width={330}
              alt="Headshot of Ekom Enyong"
              objectFit="cover"
              objectPosition="center center"
              className="rounded-full"
            />
          </div>
          <div className="max-w-2xl space-y-4 text-xl">
            <p>
              I'm a digital creative and strategist based in Charlotte, NC.
              During the day, I am the SEO Manager at{' '}
              <KommyLink
                href="https://patrontechnology.com"
                className="italic text-primary-600 underline dark:text-gray-200"
              >
                Patron Technology
              </KommyLink>
              . I am also a self-taught designer and developer, and an overall
              curious creative interested in building React applications in
              TypeScript.
            </p>
            <p>
              I believe that technology should work for humans &mdash; not the
              other way around. This means using privacy-friendly and ethical
              products, software, and tools when working.
            </p>
            <p>
              I like to work with bold, conscious brands dedicated to providing
              ethical and human-focused digital experiences. I provide bespoke
              and collaborative experiences for my clients and partners.
            </p>
          </div>
        </div>
        <hr />
      </SectionContainer>
      {/* Tech Stack */}
      <SectionContainer>
        <div className="my-20 flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between">
          <div className="lg: mb-12 lg:basis-1/2">
            <SectionHeader
              section="tools & tech"
              title="I build the web with modern tools and technologies"
              className=""
            />
            <div className="max-w-lg">
              <p className="pr-0 text-xl">
                As a self-taught developer, I am constantly learning new skills,
                and practicing old ones. My basic stack I build digital products
                with include:
              </p>
              <div className="prose prose-xl my-4 pl-8 leading-4 dark:prose-dark">
                <li>React/Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>MDX (markdown) with ContentLayer</li>
                <li>Sanity.io &mdash; Structured Content Platform</li>
                <li>Plausible &mdash; Privacy friendly analytics</li>
              </div>
              <p className="pr-0 text-xl">
                For a deeper dive into my tech stack and a look at what tools
                I'll be exploring this year, feel free to read my post.
              </p>
            </div>
          </div>
          <div className="pl-0 md:pl-12">
            <div className="max-w-md">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-md shadow-md"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      width={600}
                      height={300}
                      objectFit="cover"
                      objectPosition="bottom center"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <KommyLink href={post.href} className="mt-2 ">
                        <p className="text-2xl font-medium uppercase text-gray-800 hover:underline">
                          {post.title}
                        </p>
                        <p className="mt-2 text-lg text-gray-600">
                          {post.description}
                        </p>
                      </KommyLink>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{post.author.name}</span>
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={post.author.imageUrl}
                          height={40}
                          width={40}
                          objectFit="cover"
                          objectPosition="center center"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium uppercase text-gray-800">
                          {post.author.name}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingTime} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
      </SectionContainer>
      <Contact />
    </WebWrapper>
  );
};

export default About;
