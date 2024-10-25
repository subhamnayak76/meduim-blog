// import { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKEND_URL } from "../config";

// export interface Blog {
//     content: string;
//     title: string;
//     id: number;
//     author: {
//         name: string;
//     };
// }

// interface BlogHookResult {
//     loading: boolean;
//     error: string | null;
//     blog?: Blog;
//     blogs?: Blog[];
// }

// const getAuthHeader = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.warn("No token found in localStorage");
//         return {};
//     }
//     console.log("Token found:", token.substring(0, 10) + "..."); // Log first 10 chars of token
//     return { Authorization: `${token}` };
// };

// export const useBlogs = (): BlogHookResult => {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [blogs, setBlogs] = useState<Blog[]>([]);

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 console.log("Fetching blogs from:", `${BACKEND_URL}/api/v1/blog/bulk`);
//                 const headers = getAuthHeader();
//                 console.log("Request headers:", headers);
                
//                 const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, { headers });
//                 console.log("Response received:", response.status, response.statusText);
//                 setBlogs(response.data.blogs);
//                 setError(null);
//             } catch (err) {
//                 console.error("Error fetching blogs:", err);
//                 if (axios.isAxiosError(err) && err.response) {
//                     console.error("Response data:", err.response.data);
//                     setError(`Failed to fetch blogs: ${err.response.status} ${err.response.statusText}`);
//                 } else {
//                     setError("Failed to fetch blogs. Please try again later.");
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogs();
//     }, []);

//     return { loading, error, blogs };
// };

// export const useBlog = ({ id }: { id: string }): BlogHookResult => {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [blog, setBlog] = useState<Blog>();

//     useEffect(() => {
//         const fetchBlog = async () => {
//             try {
//                 console.log(`Fetching blog with id ${id} from:`, `${BACKEND_URL}/api/v1/blog/${id}`);
//                 const headers = getAuthHeader();
//                 console.log("Request headers:", headers);

//                 const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, { headers });
//                 console.log("Response received:", response.status, response.statusText);
//                 setBlog(response.data.blog);
//                 setError(null);
//             } catch (err) {
//                 console.error("Error fetching blog:", err);
//                 if (axios.isAxiosError(err) && err.response) {
//                     console.error("Response data:", err.response.data);
//                     setError(`Failed to fetch blog: ${err.response.status} ${err.response.statusText}`);
//                 } else {
//                     setError("Failed to fetch blog. Please try again later.");
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [id]);

//     return { loading, error, blog };
// };

import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}