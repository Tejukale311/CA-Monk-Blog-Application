import type { Blog } from "../types/blog";

type Props = {
    blog: Blog;
    onClick: () => void;
};

export default function BlogCard({ blog, onClick }: Props) {
    const getCategoryColor = (category: string) => {
        switch (category.toUpperCase()) {
            case 'FINANCE':
                return 'bg-blue-100 text-blue-700';
            case 'CAREER':
                return 'bg-purple-100 text-purple-700';
            case 'ACCOUNTING':
                return 'bg-green-100 text-green-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div
            onClick={onClick}
            className="group border-l-4 border-l-blue-600 bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all duration-300"
        >
            {/* Category + Date */}
            <div className="flex items-start justify-between gap-2 mb-3">
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide ${getCategoryColor(blog.category[0])}`}>
                    {blog.category[0]}
                </span>
                <span className="text-gray-500 text-xs whitespace-nowrap font-medium">
                    {new Date(blog.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                    })} ago
                </span>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-2 max-w-[220px]">
                {blog.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-700 transition max-w-[220px]">
                {blog.description}
            </p>

            {/* Featured Badge */}
            <div className="mt-3 pt-3 border-t border-gray-200">
                <span className="text-xs font-semibold text-blue-600">Featured</span>
            </div>
        </div>
    );
}
