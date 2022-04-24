import classNames from '@/utils/classnames';
import React from 'react';

interface PostTitleProps {
	center?: boolean;
	children: React.ReactNode;
	rest?: React.HTMLAttributes<HTMLHeadingElement>;
}

export default function Post({ center, children, ...rest }: PostTitleProps) {
	return (
		<h1
			className={classNames(
				center ? 'mx-auto' : '',
				'max-w-6xl mb-4 text-4xl font-medium leading-9 tracking-tight uppercase sm:text-5xl sm:leading-10 md:text-6xl md:leading-14 lg:text-7xl'
			)}
			{...rest}
		>
			{children}
		</h1>
	);
}
