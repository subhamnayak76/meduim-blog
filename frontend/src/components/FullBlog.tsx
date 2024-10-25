
import {Blog} from "../hooks/index";
import { AppBar } from "./AppBar";

const defaultAvatarUrl = (name: string | number | boolean) => `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`;

// Custom Avatar component
const Avatar = ({ size, name, src }: { size: string, name: string, src: string }) => {
  const sizeClass = size === 'big' ? 'w-16 h-16' : 'w-10 h-10';
  return (
    <img 
      src={src || defaultAvatarUrl(name)}
      alt={name}
      className={`rounded-full ${sizeClass}`}
    />
  );
};

export const FullBlog = ({blog }: { blog: Blog }) => {
  return (
    <div className="bg-white min-h-screen">
      <AppBar />
      
    
      
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12 gap-8">
          <div className="col-span-8 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-5xl font-extrabold mb-2">{blog.title}</h1>
            <p className="text-slate-500 mb-4">Posted on  "2nd December 2023"</p>
            <div className="prose max-w-none">{blog.content}</div>
          </div>
          
          <div className="col-span-4 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-slate-600 text-lg mb-4">Author</h2>
            <div className="flex items-start">
              <div className="pr-4">
                <Avatar 
                  size="big" 
                  name={blog.author.name || "Anonymous"} 
                  src={  defaultAvatarUrl(blog.author.name || "Anonymous")}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{blog.author.name || "Anonymous"}</h3>
                <p className="pt-2 text-slate-500">
                  { "Master of mirth, purveyor of puns, and the funniest person in the kingdom."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

