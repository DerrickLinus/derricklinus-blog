import BlogCard from '@/components/BlogCard';
import BlogHeader from '@/components/BlogHeader';
import CategoryList from '@/components/CategoryList';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import { getAllPostsData, getCategories } from '@/lib/posts';

export default function BlogPage() {
  const blogPosts = getAllPostsData();
  const categories = getCategories();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <BlogHeader />
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧栏 - 个人介绍 */}
          <div className="lg:w-1/4">
            <div>
              <ProfileCard />
            </div>
          </div>
          
          {/* 中间内容区 - 博客文章 */}
          <div className="lg:w-2/4">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  slug={post.slug}
                  category={post.category}
                />
              ))}
            </div>
          </div>
          
          {/* 右侧栏 - 分类导航 */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-6 border border-gray-200">
              <CategoryList categories={categories.filter(c => c !== '所有文章')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}