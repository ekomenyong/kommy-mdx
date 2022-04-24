import Container from '../Container';
import KommyLink from '../Link';

const AboutSection = () => {
	return (
		<Container>
			<div className="py-12 lg:py-24">
				<div className="flex flex-col uppercase lg:flex-row lg:items-baseline lg:justify-between">
					<span className="pb-6 text-xl font-medium lg:pb-0">who i am</span>
					<div className="max-w-3xl space-y-8 text-2xl font-medium leading-8 lg:leading-10 lg:text-4xl">
						<p>
							Experienced SEO professional passionate about modern web technologies and
							user-friendly design.
						</p>
						<p>
							I support brands and companies by using digital strategy, design, and development to
							create memorable web experiences.
						</p>
					</div>
				</div>
				<div className="flex flex-col max-w-3xl pt-16 lg:flex-row lg:items-baseline lg:justify-between lg:pt-32">
					<p className="mb-8 text-xl font-medium uppercase w-28 lg:mb-0">why you might care</p>
					<div className="max-w-md space-y-6 text-lg lg:text-2xl">
						<p>
							With a background primarily working with digital agencies, I've spent the last decade
							building and executing marketing and content strategies for various types of companies
							and brands.
						</p>
						<p>
							Years of frustration working with client's clunky or low-performance web platforms
							lead me to learn how to solve my own problem: building scalable web applications that
							end-users love and fast-moving teams can easily manage.
						</p>
						<div className="pt-8">
							<KommyLink href="/about" className="font-medium uppercase animated-underline">
								More about what I do <span className="pl-8">&rarr;</span>
							</KommyLink>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default AboutSection;
