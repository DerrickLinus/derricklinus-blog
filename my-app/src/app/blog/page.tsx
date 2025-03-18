import BlogCard from '@/components/BlogCard';
import BlogHeader from '@/components/BlogHeader';
import CategoryList from '@/components/CategoryList';
import Navbar from '@/components/Navbar';
import { blogPosts, categories } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BlogHeader />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategoryList categories={categories.filter(c => c !== '所有文章')} />
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}