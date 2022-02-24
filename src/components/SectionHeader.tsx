import React from 'react';

interface SectionHeaderProps {
  section: string;
  title?: string;
  className?: string;
  rest?: React.HTMLAttributes<HTMLDivElement>;
}

export default function SectionHeader({
  section,
  title,
  className,
  ...rest
}: SectionHeaderProps) {
  return (
    <div className={className} {...rest}>
      <span className="max-w-lg text-lg italic font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">
        {section}
      </span>
      <h2 className="max-w-2xl mb-4 text-3xl font-medium uppercase lg:w-full lg:text-4xl">
        {title}
      </h2>
    </div>
  );
}
