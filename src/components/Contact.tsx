import config from '@/config/site';

import KommyLink from './Link';
import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';

export default function Contact() {
  return (
    <SectionContainer>
      <div className="py-20">
        <div className="mb-12">
          <SectionHeader
            section="contact"
            title="Ready to talk about your next project?"
          />
          <p className="max-w-2xl mb-4 text-xl text-gray-600 dark:text-gray-200">
            I work with startups, agencies, and companies that want to provide
            better digital experiences for their users. Ready when you are.
          </p>
        </div>
        <KommyLink
          className="flex hover:underline"
          href={`mailto:${config.contact.email}`}
          showIcon={true}
        >
          <h3 className="pr-4 mb-8 text-xl font-medium uppercase md:text-3xl lg:text-4xl">
            hello@ekomenyong.com
          </h3>
        </KommyLink>
        <div className="flex flex-col items-start justify-start mt-8 space-x-0 space-y-4 font-medium md:flex-row md:space-y-0 md:space-x-8">
          <KommyLink
            href={config.contact.twitter}
            showIcon={false}
            className="hover:underline"
          >
            <p className="uppercase">twitter</p>
          </KommyLink>
          <KommyLink
            href={config.contact.github}
            showIcon={false}
            className="hover:underline"
          >
            <p className="uppercase">github</p>
          </KommyLink>
          <KommyLink
            href={config.contact.polywork}
            showIcon={false}
            className="hover:underline"
          >
            <p className="uppercase">polywork</p>
          </KommyLink>
          <KommyLink
            href={config.contact.linkedin}
            showIcon={false}
            className="hover:underline"
          >
            <p className="uppercase">linkedin</p>
          </KommyLink>
        </div>
      </div>
    </SectionContainer>
  );
}
