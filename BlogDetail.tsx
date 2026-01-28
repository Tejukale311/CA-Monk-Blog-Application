import { useBlog } from "../hooks/useBlogs";

type BlogDetailProps = {
    blogId: number;
};

function BlogDetail({ blogId }: BlogDetailProps) {
    const { data, isLoading, error } = useBlog(blogId);

    if (!blogId)
        return (
            <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m0 0h6" />
                        </svg>
                    </div>
                    <p className="text-gray-700 text-lg font-semibold">Select an article to read</p>
                    <p className="text-gray-500 text-sm mt-2">Choose from the list on the left</p>
                </div>
            </div>
        );

    if (isLoading)
        return (
            <div className="flex items-center justify-center h-96">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-700 font-medium">Loading article...</p>
                </div>
            </div>
        );

    if (error)
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-700 font-medium">Error loading article</p>
            </div>
        );

    return (
        <article className="bg-white rounded-lg overflow-hidden shadow-medium hover:shadow-hard transition-shadow">
            {/* Cover Image */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 group">
                {data?.coverImage && (
                    <img
                        src={data.coverImage}
                        alt={data?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10">
                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
                    {data?.category && (
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-sm font-semibold rounded-full uppercase tracking-wider">
                            {data.category.join(", ")}
                        </span>
                    )}
                    <span className="inline-flex items-center text-gray-500 text-sm font-medium">
                        📅 {new Date(data?.date || "").toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                    <span className="inline-flex items-center text-gray-500 text-sm font-medium">
                        ⏱️ ~{Math.ceil((data?.content?.length || 0) / 200)} min read
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {data?.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                    {data?.description}
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>

                {/* Content */}
                <div className="prose max-w-none">
                    <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap font-light">
                        {data?.content}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 hover:shadow-lg">
                        Share Article
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition-all duration-300">
                        Save to Reading List
                    </button>
                </div>
            </div>
        </article>
    );
}

export default BlogDetail;
