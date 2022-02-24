import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLHeadingElement>;
}

export default function PageTitle({ children, ...props }: PageTitleProps) {
  return (
    <h1 className="mb-8 text-4xl font-medium uppercase lg:text-6xl" {...props}>
      {children}
    </h1>
  );
}
