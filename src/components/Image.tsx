import Image, { ImageProps } from 'next/image';
import React from 'react';

interface KommyImageProps extends ImageProps {
	caption?: string;
}

export default function KommyImage({ alt, caption, ...rest }: KommyImageProps) {
	return (
		<figure className="flex flex-col items-center justify-center ">
			<span className="border rounded-md">
				<Image objectFit="cover" objectPosition="center center" alt={alt} {...rest} />
			</span>
			<figcaption className="pt-0 text-base italic text-center text-gray-500 dark:text-gray-300">
				{caption}
			</figcaption>
		</figure>
	);
}
