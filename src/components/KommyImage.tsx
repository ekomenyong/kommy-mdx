import Image, { ImageProps } from 'next/image';
import React from 'react';

interface KommyImageProps extends ImageProps {
  caption?: string;
  alt: string;
}

export default function KommyImage({
  alt,
  caption,
  ...props
}: KommyImageProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image className="rounded-lg" alt={alt} {...props} />
      <p className="pt-1 text-base text-center text-gray-600 dark:text-gray-300">
        {caption}
      </p>
    </div>
  );
}
