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
    id: '5',
    title: 'README',
    slug: 'readme-welcome',
    excerpt: '欢迎来到我的个人博客',
    date: '04/20/2025',
    category: '生活随笔',
    imageSrc: '/blog/welcome-blog.png',
    imageAlt: '欢迎来到我的博客',
    content: `初次见面，请多关照

大家好！这是我的第一个个人博客网站，很高兴能与各位相遇于此。  


作为一名技术爱好者，我一直想要有一个属于自己的空间来分享知识、记录生活、交流想法，现在这个愿望终于实现了。

这个博客将会涵盖以下内容：

- **技术分享**：分享我在编程学习过程中的心得体会、实用技巧和项目经验
- **生活随笔**：记录日常生活的点滴感悟、阅读心得和个人成长
- **工具大全**：介绍一些我日常使用的效率工具、开发工具和学习资源

## 学习与改进

作为一个初次搭建博客的新手，这个网站还有很多需要改进的地方。我正在不断学习前端开发技术，努力提升用户体验和页面设计。如果您在浏览过程中发现任何问题或有任何建议，欢迎通过联系方式与我交流。

## 交流与联系

博客是一个开放的平台，我希望能通过它结识更多志同道合的朋友。您可以通过以下方式与我联系：

- GitHub: https://github.com/DerrickLinus
- CSDN: https://blog.csdn.net/DLH_bianchenggou
- Email: cucdlh@163.com 或 doggd1124@gmail.com

感谢您的访问，希望我的博客能给您带来一些有价值的内容或思考。

> "Stay Hungry, Stay Foolish" — Steve Jobs`
  },
  {
    id: '1',
    title: 'Native Git support in Zed',
    slug: 'native-git-support-in-zed',
    excerpt: 'You can now stage, commit, pull, push, and more, all natively within Zed.',
    date: '03/12/2025',
    category: '技术分享',
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