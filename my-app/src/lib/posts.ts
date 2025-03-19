import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost } from '@/data/blogPosts';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getAllPostsData(): BlogPost[] {
  // 获取/posts目录下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 移除".md"获取slug
    const slug = fileName.replace(/\.md$/, '');

    // 读取markdown文件内容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用gray-matter解析文章元数据
    const matterResult = matter(fileContents);
    
    // 解析Markdown为HTML
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content)
      .toString();
    
    // 确保每个属性都有值
    return {
      id: matterResult.data.id,
      slug: slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      category: matterResult.data.category,
      imageSrc: matterResult.data.imageSrc,
      imageAlt: matterResult.data.imageAlt,
      content: processedContent
    } as BlogPost;
  });

  // 按日期排序，最新的文章放前面
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用gray-matter解析文章元数据
    const matterResult = matter(fileContents);
    
    // 解析Markdown为HTML
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content)
      .toString();

    return {
      id: matterResult.data.id,
      slug: slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      category: matterResult.data.category,
      imageSrc: matterResult.data.imageSrc,
      imageAlt: matterResult.data.imageAlt,
      content: processedContent
    } as BlogPost;
  } catch (error) {
    console.error(`Error loading post with slug: ${slug}`, error);
    return undefined;
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export function getCategories(): string[] {
  const posts = getAllPostsData();
  const categoriesSet = new Set(posts.map(post => post.category));
  
  // 创建一个特定顺序的分类数组
  const orderedCategories = ['技术分享'];
  
  // 添加其他分类，保持原有顺序
  categoriesSet.forEach(category => {
    if (category !== '技术分享') {
      orderedCategories.push(category);
    }
  });
  
  // 添加"所有文章"到最终数组的开头
  return ['所有文章', ...orderedCategories];
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPostsData();
  if (category === '所有文章') {
    return posts;
  }
  return posts.filter(post => post.category === category);
}