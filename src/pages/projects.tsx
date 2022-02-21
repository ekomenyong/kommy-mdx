import { NextSeo } from 'next-seo';

import {
  Contact,
  PageTitle,
  ProjectCard,
  SectionContainer,
  SectionHeader,
  WebWrapper,
} from '@/components';

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
  {
    title: 'Hyper Ethos',
    description:
      'Web design and development for an independent creative collective',
    imageUrl: '/images/event.jpg',
    slug: '#',
  },
];

export default function ProjectsPage() {
  return (
    <WebWrapper>
      <NextSeo
        title="Modern Web Design & Development Projects"
        description="I design and build human-focused websites and apps using the latest web development technologies and privacy-friendly practices."
      />
      <SectionContainer>
        <div className="mb-20">
          <PageTitle>
            Modern <span className="font-bold">Web Design</span> &{' '}
            <span className="italic">Development</span>
          </PageTitle>
          <p className="max-w-3xl text-xl">
            I like to work with ambitious, conscious, and modern brands in the
            tech, music, and entertainment industries. However, a decade of
            digital marketing experience with agencies and tech companies allows
            me to cater to clients of all kinds.
          </p>
        </div>
        <hr />
      </SectionContainer>
      <SectionContainer>
        <SectionHeader
          section="projects"
          title="Here's what I've been working on"
          className="mt-20 mb-12"
        />
        <div className="grid items-center justify-center grid-flow-row grid-cols-1 mb-20 auto-rows-fr gap-x-6 gap-y-16 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              imageUrl={p.imageUrl}
              slug={p.slug}
            />
          ))}
        </div>
        <hr />
      </SectionContainer>
      <Contact />
    </WebWrapper>
  );
}
