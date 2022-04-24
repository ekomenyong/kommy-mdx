import {
  AboutHeroSection,
  ContactSection,
  Container,
  ServicesSection,
  WebWrapper,
} from '@/components';
import { config } from '@/config';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const SEO_TITLE = 'About Ekom Enyong » Digital Creative & Marketing Professional';
  const SEO_DESCRIPTION =
    'Ekom Enyong is a digital creative based in the United States. She creates ethical, modern digital products and experiences using seo, design, and code.';
  const router = useRouter();
  const CANONICAL_SLUG = router.pathname;
  console.log(CANONICAL_SLUG);
  return (
    <WebWrapper color="bg-sky-100">
      <NextSeo
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        canonical={`${config.seo.canonical}${CANONICAL_SLUG}`}
        openGraph={{
          url: config.seo.openGraph.url,
          title: SEO_TITLE,
          description: SEO_DESCRIPTION,
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
        <AboutHeroSection />
        <ServicesSection />
        <ContactSection />
      </Container>
    </WebWrapper>
  );
};

export default About;
