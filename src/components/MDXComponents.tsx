import Image from 'next/image';
import { KommyLink, Pre, Emoji } from '@/components';

const MDXComponents = {
  a: KommyLink,
  pre: Pre,
  Image,
  Emoji,
};

export default MDXComponents;
