import Image from 'next/image';
import Link from 'next/link';

export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg p-6 mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        {/* 头像占位符 - 请将图片保存在 public/images/avatar.jpg */}
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
          <Image 
            src="/images/avatar.jpg" 
            alt="个人头像" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">抱了一只狗</h2>
        
        <div className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 w-full mb-4 hover:border-blue-200 transition-colors duration-300">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 p-1.5 rounded-full mr-3">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="text-gray-700 font-medium">北京朝阳海底捞大学</p>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="bg-green-100 p-1.5 rounded-full mr-3">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="text-gray-700 font-medium">研一 AI+通信方向</p>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="bg-yellow-100 p-1.5 rounded-full mr-3">
              <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="text-gray-700 font-medium">正在努力打怪升级</p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-1.5 rounded-full mr-3">
              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="text-gray-700 font-medium">欢迎交流 信仰开源</p>
          </div>
        </div>
        
        <div className="w-full border-t border-gray-300 my-3"></div>
        
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/yourusername" target="_blank" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" className="text-gray-600 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </Link>
          <Link href="mailto:your.email@example.com" className="text-gray-600 hover:text-red-500 transform hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </Link>
        </div>
        
        <p className="text-sm text-gray-600 italic font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-200 shadow-sm">"Stay Hungry, Stay Foolish"</p>
      </div>
    </div>
  );
} 