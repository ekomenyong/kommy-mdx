import Image from 'next/image';
import Container from '../Container';

const AboutHero = () => {
	return (
		<Container>
			<div className="py-16 md:pt-60 md:pb-20">
				<div className="flex flex-col items-start justify-start lg:flex-row">
					<span className="max-w-lg pt-0 pb-4 mr-0 text-xl font-medium uppercase lg:pb-0 lg:pt-4 lg:mr-40 lg:w-28">
						meet ekom enyong
					</span>
					<div className="flex flex-col items-start">
						<h1 className="max-w-sm mb-8 text-5xl font-medium uppercase lg:max-w-3xl lg:text-9xl">
							Passionate Digital creative
						</h1>

						<Image
							src="/images/workstation.jpeg"
							height={200}
							width={520}
							alt="Headshot of Ekom Enyong"
							objectFit="cover"
							objectPosition="center center"
							className="rounded-sm"
							priority
						/>

						<h2 className="max-w-sm mt-8 text-5xl font-medium uppercase lg:max-w-3xl lg:text-9xl">
							based in charlotte
						</h2>
					</div>
				</div>
				<div className="flex flex-col max-w-3xl pt-16 lg:flex-row lg:items-baseline lg:justify-between lg:pt-32">
					<p className="max-w-lg mb-8 text-xl font-medium uppercase lg:w-28 lg:mb-0">
						How did i get here?
					</p>
					<div className="max-w-md space-y-6 text-lg lg:text-2xl">
						<p>
							I am a successful SEO professional with a near-decade of experience working with tech
							companies, SMEs, and large enterprises in the finance, real estate, chemical
							additives, oil and gas, and water/wastewater industries. For years, I have been
							executing and optimizing organic digital campaigns, generating inbound leads and
							increasing web traffic for my clients.
						</p>
						<p>
							I work at the convergence of digital strategy, design, and development, providing
							effective, engaging, and elegant web experiences. Every new project is an opportunity
							to help my clients challenge the status quo with bespoke solutions rooted in
							creativity and insight.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default AboutHero;
