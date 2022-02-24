import Link from 'next/link';
import React from 'react';

interface KommyLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  showIcon?: boolean;
  rest?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const KommyLink = ({
  href,
  children,
  className,
  showIcon = false,
  ...rest
}: KommyLinkProps) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink || isAnchorLink) {
    return (
      <Link href={href}>
        <a className={className} {...rest}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      {...rest}
    >
      {children}
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-current"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
        </svg>
      )}
    </a>
  );
};

export default KommyLink;
