import Image from 'next/image';
import KommyLink from './Link';

interface ProjectCardProps {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  slug,
  imageUrl,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-md shadow-md lg:max-w-lg">
      <KommyLink href={slug}>
        <div className="flex-shrink-0 m-0">
          <Image
            className="object-cover w-full h-48"
            src={imageUrl}
            width={900}
            height={600}
            objectFit="cover"
            objectPosition="bottom center"
            alt={`Cover image for ${title}`}
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-6 -mt-2 bg-white">
          <div className="flex-1">
            <p className="text-2xl font-medium uppercase hover:underline dark:text-gray-800">
              {title}
            </p>
            <p className="mt-2 text-lg text-gray-500">{description}</p>
          </div>
        </div>
      </KommyLink>
    </div>
  );
}
