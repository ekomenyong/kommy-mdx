import classNames from '@/utils/classnames';
import { Disclosure } from '@headlessui/react';
import { RiArrowDownSLine } from 'react-icons/ri';
import Container from '../Container';

const services = [
	{
		name: 'organic search (SEO) / content',
		description:
			'I plan, create, and maintain SEO and content strategies to maximize organic web traffic and generate inbound leads.',
	},
	{
		name: 'Web & interface design',
		description:
			"I identify users' wants and needs to design human-friendly and engaging digital experiences.",
	},
	{
		name: 'Front-end development',
		description:
			'I plan, code, and maintain scalable front-end web applications optimized for performance and usability.',
	},
];

const ServicesSection = () => {
	return (
		<Container>
			<div className="py-16">
				<div className="flex flex-col items-start justify-start lg:flex-row">
					<span className="max-w-sm pt-0 pb-4 mr-0 text-xl font-medium uppercase lg:pb-0 lg:pt-4 lg:mr-40 lg:w-28">
						how can i help you?
					</span>
					<div className="flex flex-col items-start">
						<h1 className="max-w-sm mb-8 text-5xl font-medium uppercase lg:max-w-3xl lg:text-9xl">
							services & capabilities
						</h1>

						<div className="w-full pt-8">
							<div className="divide-y-2 divide-gray-300">
								<dl className="mt-6 space-y-6 divide-y divide-gray-300">
									{services.map((s, index) => (
										<Disclosure as="div" key={index} className="pt-6">
											{({ open }) => (
												<>
													<dt className="text-lg">
														<Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-800">
															<span className="text-xl font-medium uppercase lg:text-2xl">
																{s.name}
															</span>
															<span className="flex items-center ml-6 h-7">
																<RiArrowDownSLine
																	className={classNames(
																		open ? '-rotate-180' : 'rotate-0',
																		'h-6 w-6 transform'
																	)}
																	aria-hidden="true"
																/>
															</span>
														</Disclosure.Button>
													</dt>
													<Disclosure.Panel as="dd" className="pr-12 mt-2">
														<p className="max-w-xl text-lg text-gray-700 lg:text-xl">
															{s.description}
														</p>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ServicesSection;
