import Image from 'next/image';
import { KommyLink, Pre, Emoji, KommyImage } from '@/components';

const MDXComponents = {
  a: KommyLink,
  pre: Pre,
  Image,
  KommyImage,
  Emoji,
};

export default MDXComponents;
