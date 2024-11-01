
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const blogPosts = [
    {
      category: "Design",
      title: "Designing for Accessibility: A Comprehensive Guide",
      description: "Explore the principles and best practices for creating accessible designs that cater to all users.",
      imageUrl: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      category: "Development",
      title: "Mastering React Hooks: A Deep Dive",
      description: "Unlock the power of React Hooks and learn how to build more efficient and maintainable applications.",
      imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      category: "Marketing",
      title: "Effective Content Marketing Strategies for 2024",
      description: "Discover the latest content marketing trends and strategies to boost your online presence.",
      imageUrl: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <ArrowRight className="inline-block mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-6">

            <li><a href="/signup"  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">Signup</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Discover the Latest Insights on Our Blog</h1>
          <p className="text-xl text-gray-600 mb-8">Dive into our collection of thought-provoking articles and stay ahead of the curve.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
            Read the Blog
          </button>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Latest Blog Posts</h2>
          <p className="text-gray-600 mb-12 text-center">Check out our latest blog posts and stay up-to-date with the latest trends and insights.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <a href="#" className="text-green-600 font-semibold hover:text-green-700">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter and be the first to receive exclusive content, updates, and insights.</p>
          <form className="flex flex-col md:flex-row justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 md:w-96 mb-4 md:mb-0 md:mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">&copy; 2024 My Blog. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
