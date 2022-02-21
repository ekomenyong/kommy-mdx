import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ScrollTop from './ScrollTop';

export default function WebWrapper(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <>
      <Header />
      <ScrollTop />
      <main className="mt-24 mb-auto bg-white dark:bg-gray-800">
        {children}
      </main>
      <Footer />
    </>
  );
}
