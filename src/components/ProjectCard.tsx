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
        <div className="flex-shrink-0">
          <Image
            className="h-48 w-full object-cover"
            src={imageUrl}
            width={900}
            height={600}
            objectFit="cover"
            objectPosition="bottom center"
            alt={`Cover image for ${title}`}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-2xl font-medium uppercase text-gray-900 hover:underline">
              {title}
            </p>
            <p className="mt-2 text-lg text-gray-600">{description}</p>
          </div>
        </div>
      </KommyLink>
    </div>
  );
}
