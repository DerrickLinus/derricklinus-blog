import BlogHeader from '@/components/BlogHeader';
import CategoryList from '@/components/CategoryList';
import Navbar from '@/components/Navbar';
import { getCategories, getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

// 使页面转换更平滑的属性
export const revalidate = 3600; // 设置页面缓存时间
export const dynamicParams = false; // 仅允许预渲染的路径

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  const categories = getCategories();
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧栏 - 分类目录 */}
          <div className="lg:w-1/5">
            <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-4 border border-gray-200">
              <CategoryList 
                categories={categories.filter(c => c !== '所有文章')} 
                activeCategory={post.category}
              />
            </div>
          </div>
          
          {/* 主要内容区 - 文章 */}
          <div className="lg:w-4/5">
            <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-96 w-full image-container">
                <Image 
                  src={post.imageSrc} 
                  alt={post.imageAlt} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 75vw"
                  className="object-cover"
                  priority
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIj48L3JlY3Q+PC9zdmc+"
                />
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-500 mb-6">发布于 {post.date} • {post.category}</p>
                <div className="prose prose-lg max-w-none">
                  <MarkdownContent content={post.content || post.excerpt} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}