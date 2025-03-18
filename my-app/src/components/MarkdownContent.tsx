"use client";

import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      components={{
        h1: ({children}) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
        h2: ({children}) => <h2 className="text-2xl font-bold my-3">{children}</h2>,
        h3: ({children}) => <h3 className="text-xl font-bold my-2">{children}</h3>,
        p: ({children}) => <p className="my-4">{children}</p>,
        a: ({href, children}) => (
          <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
        ul: ({children}) => <ul className="list-disc pl-6 my-4">{children}</ul>,
        ol: ({children}) => <ol className="list-decimal pl-6 my-4">{children}</ol>,
        li: ({children}) => <li className="my-1">{children}</li>,
        blockquote: ({children}) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            {children}
          </blockquote>
        ),
        code: ({children}) => (
          <code className="bg-gray-100 rounded px-2 py-1">{children}</code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
} 