import Link from 'next/link';

interface CategoryListProps {
  categories: string[];
  activeCategory?: string;
}

export default function CategoryList({ categories, activeCategory }: CategoryListProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">CATEGORIES</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            href="/blog" 
            className={`block text-sm ${!activeCategory ? 'font-semibold text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
          >
            所有文章
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link 
              href={`/blog/category/${category.toLowerCase().replace(/ /g, '-')}`}
              className={`block text-sm ${activeCategory === category ? 'font-semibold text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}