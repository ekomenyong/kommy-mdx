import React from 'react';

interface PostTitleProps {
  children: React.ReactNode;
  rest?: React.HTMLAttributes<HTMLHeadingElement>;
}

export default function Post({ children, ...rest }: PostTitleProps) {
  return (
    <h1
      className="max-w-5xl mx-auto mb-4 text-3xl font-medium leading-9 tracking-tight uppercase sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 lg:text-6xl"
      {...rest}
    >
      {children}
    </h1>
  );
}
