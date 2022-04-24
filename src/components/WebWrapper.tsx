import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function WebWrapper(props: { children: React.ReactNode; color?: string }) {
	const { color, children } = props;
	return (
		<div className={color}>
			<Header />
			<main className="mx-auto">{children}</main>
			<Footer />
		</div>
	);
}
