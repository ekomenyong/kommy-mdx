import Image from 'next/image';
import Container from '../Container';
import { shimmer, toBase64 } from '@/utils/image-shimmer';

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-start mt-10 md:mt-32">
        <h1 className="max-w-sm mb-8 text-6xl font-medium uppercase lg:max-w-3xl lg:text-9xl">
          Digital creative
        </h1>
        <Image
          src="/images/ekom-enyong-headshot.jpeg"
          height={280}
          width={448}
          alt="Headshot of Ekom Enyong"
          objectFit="cover"
          objectPosition="top center"
          className="rounded-sm"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(280, 448))}`}
          priority
        />
      </div>
      <div className="flex flex-row items-end justify-between max-w-md mb-10 lg:max-w-none md:mb-32">
        {/* <RiArrowDownLine className="order-3 text-6xl lg:text-9xl lg:order-1" /> */}
        <span className="order-3 text-6xl lg:text-9xl lg:order-1">&darr;</span>
        <p className="order-2 hidden max-w-xs mb-2 ml-20 text-2xl font-medium leading-7 uppercase lg:inline-flex">
          I help brands create modern, human-friendly digital experiences.
        </p>
        <h2 className="order-1 max-w-sm mt-8 text-6xl font-medium uppercase lg:mt-0 lg:text-right lg:max-w-2xl lg:text-9xl lg:order-3">
          Ekom Enyong
        </h2>
      </div>
    </Container>
  );
};

export default HeroSection;
