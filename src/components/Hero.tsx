import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';
import KommyLink from './Link';
import SectionContainer from './SectionContainer';

export default function Hero() {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center pt-10 pb-20 md:pt-32 lg:items-start">
        <div className="flex flex-col items-center justify-center mb-20 space-y-8 lg:mb-0 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <div className="max-w-sm md:max-w-2xl lg:max-w-3xl lg:basis-2/3">
            <h1 className="mb-4 text-4xl font-medium uppercase md:text-5xl lg:text-6xl">
              <span className="font-bold">
                Ekom<span className="italic font-normal"> Enyong</span>
              </span>{' '}
              is a Digital Creative based in Charlotte, NC.
            </h1>
            <p className="max-w-sm text-lg md:max-w-xl md:text-xl lg:text-2xl">
              I help conscious brands and companies create human-friendly
              digital experiences using data, design, code, and strategic
              creativity.
            </p>
          </div>
          <div>
            <Image
              src="/images/ekom-enyong-headshot.jpeg"
              height={380}
              width={380}
              alt="Headshot of Ekom Enyong"
              objectFit="cover"
              objectPosition="center center"
              className="rounded-full animate-spin-slow"
            />
          </div>
        </div>
        <KommyLink
          href="/about"
          className="flex flex-row items-center justify-center w-full px-4 py-2 text-base font-medium tracking-wider text-white uppercase border border-transparent rounded shadow-sm bg-primary-600 hover:underline dark:border-primary-600 dark:hover:bg-transparent sm:max-w-lg lg:max-w-sm"
        >
          Learn more about me
          <RiArrowRightLine className="w-6 h-6 ml-4" />
        </KommyLink>
      </div>
      <hr />
    </SectionContainer>
  );
}
