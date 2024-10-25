
import axios from 'axios';
import { AppBar } from '../components/AppBar';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

  return (
    <div>
      <AppBar />
      
      <main className="max-w-3xl mx-auto mt-8 px-4">
        <div className="relative">
          <button className="absolute -left-12 top-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-2xl text-gray-400">+</span>
          </button>
          <input
            type="text"
            placeholder="Title"
            className="w-full text-4xl font-bold border-none outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <textarea 
          placeholder="Tell your story..."
          className="w-full mt-4 text-xl text-gray-600 border-none outline-none resize-none"
          rows={10}
            onChange={(e) => setDescription(e.target.value)}
        />
        <div className="mt-6 flex justify-start">
          <button
            onClick={async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content: description,
                }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            
                navigate(`/blog/${response.data.id}`);
              
            }}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
          >
            Publish Post
          </button>
        </div>
      </main>
    </div>
  );
};

export default Publish;