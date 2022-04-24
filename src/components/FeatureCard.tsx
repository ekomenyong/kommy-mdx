import React from 'react';
import { RiCheckLine } from 'react-icons/ri';

interface FeatureCardProps {
	name: string;
	children: React.ReactNode;
}
const FeatureCard = ({ name, children }: FeatureCardProps) => {
	return (
		<div className="relative">
			<div>
				<RiCheckLine className="absolute w-6 h-6 text-success-500" aria-hidden="true" />
				<p className="py-0 my-0 text-lg font-medium ml-9">{name}</p>
			</div>
			<p className="py-0 my-0 ml-9">{children}</p>
		</div>
	);
};

export default FeatureCard;
