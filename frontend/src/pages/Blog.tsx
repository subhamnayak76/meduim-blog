import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
import BlogSkeleton from "../components/BlogSkeleton";
const Blog = () => {
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });
    if (loading || !blog) {
        return <div>
            <AppBar />
        
            <div className="flex justify-center">
                <div className="max-w-3xl w-full">
                <BlogSkeleton />
                </div>    
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
  
}
export default Blog



// import { useParams } from "react-router-dom";
// import { useBlog } from "../hooks";
// import { FullBlog } from "../components/FullBlog";
// import { AppBar } from "../components/AppBar";
// import BlogSkeleton from "../components/BlogSkeleton";

// const Blog = () => {
//     const { id } = useParams();
//     const { loading, blog } = useBlog({
//         id: id || ""
//     });

//     return (
//         <div>
//             <AppBar />
//             <div className="flex justify-center">
//                 <div className="max-w-3xl w-full">
//                     {loading || !blog ? (
//                         <BlogSkeleton />
//                     ) : (
//                         <FullBlog blog={blog} />
//                     )}
//                 </div>    
//             </div>
//         </div>
//     );
// }

// export default Blog;