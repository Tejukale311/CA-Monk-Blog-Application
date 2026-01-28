import { useState } from "react";
import BlogList from "./components/BlogList";
import { Header } from "./components/Header";
import BlogDetail from "./components/BlogDetail";
import CreateBlogForm from "./components/CreateBlogForm";

function App() {
  const [selectedId, setSelectedId] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          CA Monk Blog
        </h1>
        <p className="text-xl text-gray-600">
          Stay updated with the latest trends in finance, accounting, and career growth
        </p>
      </div>

      {/* Create Blog Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CreateBlogForm />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Blog List */}
          <div className="lg:col-span-1 lg:max-w-md w-full mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <BlogList onSelect={setSelectedId} />
          </div>

          {/* Right - Blog Detail or Featured Image */}
          <div className="lg:col-span-2">
            {selectedId > 0 ? (
              <BlogDetail blogId={selectedId} />
            ) : (
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Featured"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

