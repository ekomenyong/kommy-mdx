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
    href: '/posts/react-nextjs-developer-tech-stack-tools',
    description:
      "My 2022 design and React development tools I'm currently using. Plus, an exploration of what new tools and skills I'm exploring this year.",
    date: 'Feb 23, 2022',
    datetime: '2023-02-23',
    imageUrl:
      '/images/covers/cover-react-nextjs-developer-tech-stack-tools.jpg',
    readingTime: '10 min',
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
        titleTemplate="%s | Ekom Enyong"
        description="Ekom Enyong is a digital creative based in the United States. She creates ethical, modern digital products and experiences using seo, design, and code."
        canonical="https://ekomenyong.com/about"
        openGraph={{
          title: 'About Ekom Enyong » Digital Creative & Next.js Developer',
          description:
            'Ekom Enyong is a digital creative based in the United States. She creates ethical, modern digital products and experiences using seo, design, and code.',
          url: 'https://ekomenyong.com/about',
          site_name: 'EkomEnyong.com',
          type: 'website',
          images: [
            {
              url: 'https://ekomenyong.com/images/og-default.jpg',
              width: 1200,
              height: 630,
              alt: 'Cover image for EkomEnyong.com - Digital Creative » SEO, Design, and Development',
            },
          ],
        }}
        twitter={{
          handle: '@EkomEnyong',
          site: '@EkomEnyong',
          cardType: 'summary_large_image',
        }}
      />
      {/* Hero */}
      <SectionContainer>
        <div className="max-w-2xl mx-auto text-center py-28">
          <p className="mb-2 text-xl italic font-medium tracking-wider text-gray-600 uppercase dark:text-gray-300">
            Meet ekom
          </p>
          <h1 className="mb-4 text-4xl font-medium uppercase md:text-5xl lg:text-6xl">
            I create{' '}
            <span className="font-bold"> ethical digital experiences</span> that
            help <span className="italic font-normal">push us all forward</span>
            .
          </h1>
        </div>
      </SectionContainer>
      {/* About */}
      <SectionContainer>
        <div className="flex flex-col mb-12 lg:mb-20 lg:flex-row lg:items-start lg:justify-between">
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
                className="italic underline text-primary-600 dark:text-gray-200"
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
        <div className="flex flex-col items-center justify-start my-20 lg:flex-row lg:items-start lg:justify-between">
          <div className="mb-12 lg: lg:basis-1/2">
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
              <div className="pl-8 my-4 leading-4 prose prose-xl dark:prose-dark">
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
                      className="object-cover w-full h-48"
                      src={post.imageUrl}
                      width={600}
                      height={315}
                      objectFit="cover"
                      objectPosition="bottom center"
                      alt={`Cover image for ${post.title}`}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 -mt-2 bg-white">
                    <div className="flex-1">
                      <KommyLink href={post.href} className="mt-2 ">
                        <p className="text-2xl font-medium text-gray-800 uppercase hover:underline">
                          {post.title}
                        </p>
                        <p className="mt-2 text-lg text-gray-600">
                          {post.description}
                        </p>
                      </KommyLink>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{post.author.name}</span>
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={post.author.imageUrl}
                          height={40}
                          width={40}
                          objectFit="cover"
                          objectPosition="center center"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800 uppercase">
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
