import { config } from '@/config';
import Container from '../Container';
import KommyLink from '../Link';

const ContactSection = () => {
  return (
    <Container>
      <div className="max-w-4xl py-24">
        <div className="flex flex-row items-baseline justify-between max-w-3xl uppercase">
          <p className="w-40 pb-6 text-xl font-medium lg:pb-0">contact</p>
          <p className="w-40 pb-6 text-xl font-medium lg:pb-0">
            got a project in mind?
          </p>
          <p className="hidden w-40 pb-6 text-xl font-medium lg:pb-0 lg:inline-flex">
            let's talk about it.
          </p>
        </div>
        <div className="pt-12 lg:pt-20">
          <KommyLink
            href="mailto:hello@ekomenyong.com"
            className="text-6xl font-medium uppercase break-words lg:text-9xl animated-underline-contact"
          >
            {config.contact.email}
          </KommyLink>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
