export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Native Git support in Zed',
    slug: 'native-git-support-in-zed',
    excerpt: 'You can now stage, commit, pull, push, and more, all natively within Zed.',
    date: '03/12/2025',
    category: '技术',
    imageSrc: '/blog/git-support.png',
    imageAlt: 'Git support in Zed editor',
    content: 'Full article content here...'
  },
  {
    id: '2',
    title: 'Zed now predicts your next edit with Zeta, our new open model',
    slug: 'zed-predicts-next-edit-with-zeta',
    excerpt: 'A tool that predicts your next move. Powered by Zeta, our new open-source, open-data model.',
    date: '02/13/2025',
    category: '技术分享',
    imageSrc: '/blog/zeta-model.png',
    imageAlt: 'Zeta AI model in Zed editor',
    content: 'Full article content here...'
  },
  {
    id: '3',
    title: 'Add some color to your life, with icon themes',
    slug: 'add-color-with-icon-themes',
    excerpt: 'You can now use icon themes to change the way folder and file icons look in Zed',
    date: '02/05/2025',
    category: '生活随笔',
    imageSrc: '/blog/icon-themes.png',
    imageAlt: 'Icon themes in Zed editor',
    content: 'Full article content here...'
  },
  {
    id: '4',
    title: 'How is DeepSeek-R1 for Coding? Try it right now!',
    slug: 'deepseek-r1-for-coding',
    excerpt: 'We integrated DeepSeek-R1 into Zed. Here\'s what we learned.',
    date: '01/27/2025',
    category: '工具大全',
    imageSrc: '/blog/deepseek.png',
    imageAlt: 'DeepSeek AI in Zed editor',
    content: 'Full article content here...'
  }
];

export const categories = [
  '所有文章',
  '技术分享',
  '生活随笔',
  '工具大全'
];