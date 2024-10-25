



import { AppBar } from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="max-w-3xl w-full">
                    {loading ? (<>
                        <BlogSkeleton/>
                        <BlogSkeleton/>
                        <BlogSkeleton/>
                        <BlogSkeleton/>
                        </>
                    ) : (
                        blogs && blogs.map(blog => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id.toString()}
                                author={{
                                    name: blog.author.name
                                }}
                                title={blog.title}
                                description={blog.content}
                                publishedDate={ new Date().toISOString()}
                                readTime={`${Math.ceil(blog.content.split(' ').length / 200)} min read`}
                                
                                
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}