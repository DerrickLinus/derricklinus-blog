# Derrick Linus 的个人博客

这是一个使用 [Next.js](https://nextjs.org) 构建的个人博客项目，采用了现代化的技术栈和清晰的代码结构。

## 项目简介

这是一个集技术分享、生活随笔和工具推荐于一体的个人博客网站。网站采用了简洁现代的设计风格，支持文章分类、响应式布局等功能。

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel

## 项目结构

```plaintext
my-app/
├── src/
│   ├── app/                 # 应用主目录
│   │   ├── page.tsx        # 首页
│   │   └── layout.tsx      # 全局布局
│   ├── components/         # 可复用组件
│   ├── data/              # 数据文件
│   │   └── blogPosts.ts   # 博客文章数据
│   └── styles/            # 样式文件
├── public/                # 静态资源
│   └── blog/             # 博客图片
├── tailwind.config.js    # Tailwind 配置
└── package.json          # 项目依赖
```

### 功能特点

- 响应式设计，支持多端浏览
- 文章分类系统
- 现代化的UI设计
- SEO优化
- 快速加载和优秀的性能表现

### 本地开发  
（在IDE的PowerShell终端中运行）

1. 克隆项目  
git clone https://github.com/DerrickLinus/derricklinus-blog.git  
cd derricklinus-blog

2. 安装依赖  
npm install

3. 启动开发服务器  
npm run dev  

打开http://localhost:3000 查看网站。

### 部署

项目可以轻松部署到Vercel平台

### 贡献

欢迎提交 Issue 和 Pull Request!
