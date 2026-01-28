import { useBlogs } from "../hooks/useBlogs";
import BlogCard from "./BlogCard";
import type { Blog } from "../types/blog";

type Props = {
  onSelect: (id: number) => void;
};

export default function BlogList({ onSelect }: Props) {
  const { data, isLoading, error } = useBlogs();

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600 mx-auto mb-3"></div>
          <span className="text-gray-600 text-sm font-medium">Loading articles...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-600 font-medium">Error loading articles</p>
      </div>
    );

  return (
    <div className="space-y-4">
      {(data ?? []).length === 0 ? (
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-2">No articles yet.</p>
          <p className="text-blue-600 font-semibold">Create your first blog post!</p>
        </div>
      ) : (
        (data ?? []).map((blog: Blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={() => onSelect(blog.id)}
          />
        ))
      )}
    </div>
  );
}
