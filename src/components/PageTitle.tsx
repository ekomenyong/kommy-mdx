import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
  rest?: React.HTMLAttributes<HTMLHeadingElement>;
}

export default function PageTitle({ children, ...rest }: PageTitleProps) {
  return (
    <h1 className="mb-8 text-4xl font-medium uppercase lg:text-6xl" {...rest}>
      {children}
    </h1>
  );
}
