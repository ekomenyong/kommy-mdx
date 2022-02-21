import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return <div className="px-4 mx-auto max-w-7xl">{children}</div>;
}
