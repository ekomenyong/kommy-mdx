import Link, { LinkProps } from 'next/link';
import { FC, AllHTMLAttributes } from 'react';

const KommyLink: FC<LinkProps & AllHTMLAttributes<HTMLAnchorElement>> = ({
	children,
	href,
	...rest
}) => {
	const isInternalLink = (href && href.startsWith('/')) || href.startsWith('#');

	if (isInternalLink) {
		return (
			<Link href={href} passHref>
				<a {...rest}>{children}</a>
			</Link>
		);
	}
	return (
		<a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
			{children}
		</a>
	);
};

export default KommyLink;
