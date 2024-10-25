


const BlogSkeleton = () => {
  return (
    <div className="flex flex-col border-b border-gray-200 py-8 animate-pulse">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mr-2"></div>
        <div className="h-3 bg-gray-200 rounded w-20"></div>
      </div>
      
      <div className="flex justify-between">
        <div className="flex-1 pr-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="flex items-center">
            <div className="h-3 bg-gray-200 rounded w-16 mr-2"></div>
            <div className="h-3 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;