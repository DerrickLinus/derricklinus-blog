import BlogHeader from '@/components/BlogHeader';
import CategoryList from '@/components/CategoryList';
import Navbar from '@/components/Navbar';
import { blogPosts, categories } from '@/data/blogPosts';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategoryList categories={categories.filter(c => c !== '所有文章')} />
          </div>
          <div className="md:w-3/4">
            <article className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src={post.imageSrc} 
                  alt={post.imageAlt} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-500 mb-6">Published on {post.date} • {post.category}</p>
                <div className="prose max-w-none">
                  <p>{post.content || post.excerpt}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}