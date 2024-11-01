import { Bell, MoreHorizontal } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';


export const AppBar: React.FC = (): JSX.Element => {   

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
        </div>
        <span className="text-gray-600 font-medium">Draft in Kirags</span>
        <span className="text-gray-400">Saved</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link to ={'/publish'}>
        <button className="px-4 py-2 bg-green-600 text-white rounded-full font-medium">
          Publish
        </button>
        </Link>
        <Bell className="text-gray-400 w-6 h-6" />
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-medium"></span>
        </div>
        <MoreHorizontal className="text-gray-400 w-6 h-6" />
      </div>
    </div>
  );
};
