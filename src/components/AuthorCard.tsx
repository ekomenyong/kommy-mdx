import { config } from '@/config';
import Avatar from './Avatar';
import KommyLink from './Link';

const AuthorCard = () => {
	return (
		<div className="flex flex-row items-center justify-start mt-4">
			<Avatar href="/images/ekom-enyong-headshot.jpeg" />
			<div className="flex flex-col items-start justify-start ml-4">
				<KommyLink
					href="/about"
					className="mb-0 text-base font-medium uppercase animated-underline"
				>
					Ekom Enyong
				</KommyLink>
				<span className="flex space-x-2 text-sm font-normal uppercase">
					<KommyLink
						href={config.contact.twitter}
						className="hover:underline hover:underline-offset-2"
					>
						@EkomEnyong
					</KommyLink>
				</span>
			</div>
		</div>
	);
};

export default AuthorCard;
