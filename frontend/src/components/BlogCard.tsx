// // 

// import React from 'react';

// interface Author {
//   name: string;
// }

// interface BlogCardProps {
//   id: string;
//   author: Author;
//   title: string;
//   description: string;
//   publishedDate: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({
//   author,
//   title,
//   description,
//   publishedDate,
// }) => {
//   return (
//     <div className="flex flex-col border-b border-gray-200 py-8">
//       <div className="flex items-center mb-2">
//         <span className="text-sm font-medium mr-2">{author.name}</span>
//         <span className="text-xs text-gray-500">
//           {new Date(publishedDate).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//           })}
//         </span>
//       </div>
      
//       <div className="flex justify-between">
//         <div className="flex-1 pr-4">
//           <h2 className="text-xl font-bold mb-2">{title}</h2>
//           <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;


import React from 'react';
import { Link } from 'react-router-dom';

interface Author {
  name: string;
}

interface BlogCardProps {
  id: string;
  author: Author;
  title: string;
  description: string;
  publishedDate: string;
  readTime?: string;
  tag?: string;
  isSelected?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  author,
  title,
  description,
  publishedDate,
  readTime,
  tag,
  isSelected,
}) => {
  // Default avatar image URL
  const defaultAvatarUrl = "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent(author.name);

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/blog/${id}`}>
    <div className="flex flex-col border-b border-gray-200 py-8 cursor-pointer">
      <div className="flex items-center mb-2">
        <img 
          src={defaultAvatarUrl}
          alt={`${author.name}'s avatar`} 
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-sm font-medium mr-2">{author.name}</span>
        <span className="text-xs text-gray-500">
          {formatDate(publishedDate)}
        </span>
        {tag && <span className="text-xs text-yellow-500 ml-2">✦ {tag}</span>}
      </div>
      
      <div className="flex justify-between">
        <div className="flex-1 pr-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center text-sm text-gray-500">
            {readTime && <span className="mr-2">{readTime}</span>}
            {isSelected && <span className="text-green-600">Selected for you</span>}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;