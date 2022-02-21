import React, { FC } from 'react';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';
import KommyLink from './Link';

interface IProps {
  title: string;
}

const SocialShare: FC<IProps> = ({ title }) => {
  let url = '';

  if (typeof window !== 'undefined') {
    url = window.location.href;
  }

  const socialShareLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      label: 'Twitter',
      icon: IoLogoTwitter,
      bg: '#1DA1F2',
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      label: 'Facebook',
      icon: IoLogoFacebook,
      bg: '#4267B2',
    },
    {
      href: `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`,
      label: 'LinkedIn',
      icon: IoLogoLinkedin,
      bg: '#2867B2',
    },
  ];

  return (
    <div className="py-8">
      <h3 className="mb-4 text-base font-medium uppercase text-primary-600 underline dark:text-gray-200">
        Share this post
      </h3>
      <div className="flex flex-nowrap items-center justify-start">
        {socialShareLinks.map((link, index) => {
          return (
            <KommyLink
              key={index}
              className="mr-8 last:mr-0 hover:no-underline"
              href={link.href}
              showIcon={false}
            >
              <div
                className="inline-block rounded-sm py-2 px-7 text-white"
                style={{ backgroundColor: link.bg }}
              >
                <link.icon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
            </KommyLink>
          );
        })}
      </div>
    </div>
  );
};

export default SocialShare;
