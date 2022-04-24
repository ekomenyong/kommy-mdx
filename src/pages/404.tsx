import { KommyLink, Container, WebWrapper } from '@/components';

export default function FourZeroFour() {
	return (
		<WebWrapper>
			<Container>
				<div className="flex flex-col items-start justify-start py-72 md:flex-row md:items-center md:justify-center md:space-x-6">
					<div className="pt-6 pb-8 space-x-2 md:space-y-5">
						<h1 className="text-6xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-9xl md:leading-14">
							404
						</h1>
					</div>
					<div className="max-w-lg">
						<p className="mb-4 text-xl font-medium leading-normal md:text-4xl">
							Uh-oh! I think you might be lost...
						</p>
						<p className="mb-8 text-lg">
							Unfortunately, that page doesn't exist. Why don't you try navigating to another area
							of the site?
						</p>
						<KommyLink
							href="/"
							className="inline-flex items-center justify-center px-4 py-1 mt-8 text-base font-medium tracking-wider text-white uppercase bg-gray-800 border border-transparent rounded shadow-sm bg-accent whitespace-nowrap hover:underline"
						>
							Back to homepage &rarr;
						</KommyLink>
					</div>
				</div>
			</Container>
		</WebWrapper>
	);
}
