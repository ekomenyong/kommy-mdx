import Image from 'next/image';
interface AvatarProps {
  href: string;
}

const Avatar = ({ href }: AvatarProps) => {
  return (
    <Image
      src={href}
      height={44}
      width={44}
      alt="Default avatar"
      objectFit="cover"
      objectPosition="center center"
      className="rounded-full"
    />
  );
};

export default Avatar;
