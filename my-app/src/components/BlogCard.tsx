import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, imageSrc, imageAlt, slug }: BlogCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill 
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{excerpt}</p>
          <p className="text-gray-500 text-xs">Published on {date}</p>
        </div>
      </Link>
    </div>
  );
}