import React from 'react';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';
import KommyLink from './Link';

interface SocialShareProps {
	title: string;
	slug: string;
}

const SocialShare = ({ title, slug }: SocialShareProps) => {
	const socialShareLinks = [
		{
			href: `https://twitter.com/intent/tweet?text=${title}&url=https://ekomenyong.com/posts/${slug}`,
			label: 'Twitter',
			icon: IoLogoTwitter,
			bg: '#1DA1F2',
		},
		{
			href: `https://www.facebook.com/sharer/sharer.php?u=https://ekomenyong.com/posts/${slug}`,
			label: 'Facebook',
			icon: IoLogoFacebook,
			bg: '#4267B2',
		},
		{
			href: `https://www.linkedin.com/shareArticle?url=https://ekomenyong.com/posts/${slug}&title=${title}`,
			label: 'LinkedIn',
			icon: IoLogoLinkedin,
			bg: '#2867B2',
		},
	];

	return (
		<div className="py-8">
			<h3 className="mb-4 text-base font-medium text-gray-800 uppercase">Share this post</h3>
			<div className="flex items-center justify-start flex-nowrap">
				{socialShareLinks.map((link, index) => {
					return (
						<KommyLink key={index} className="mr-8 last:mr-0 hover:no-underline" href={link.href}>
							<div
								className="inline-block px-4 py-2 text-white rounded-sm"
								style={{ backgroundColor: link.bg }}
							>
								<link.icon className="w-5 h-5 text-white" aria-hidden="true" />
							</div>
						</KommyLink>
					);
				})}
			</div>
		</div>
	);
};

export default SocialShare;
