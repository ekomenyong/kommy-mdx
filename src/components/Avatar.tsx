import Image from 'next/image'
interface AvatarProps {
	href: string
}

const Avatar = ({ href }: AvatarProps) => {
	return (
		<Image
			src={href}
			height={40}
			width={40}
			alt='Default avatar'
			objectFit='cover'
			objectPosition='center center'
			className='rounded-full'
		/>
	)
}

export default Avatar
