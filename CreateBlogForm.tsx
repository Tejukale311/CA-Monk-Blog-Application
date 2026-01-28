import { useCreateBlog } from "../hooks/useBlogs";

export default function CreateBlogForm() {
    const mutation = useCreateBlog();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        mutation.mutate({
            title: data.get("title") as string,
            description: data.get("description") as string,
            coverImage: data.get("coverImage") as string,
            content: data.get("content") as string,
            category: ["TECH"],
            date: new Date().toISOString(),
        });

        e.currentTarget.reset();
    };

    return (
        <form
            onSubmit={submit}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow hover:shadow-blue-900/20"
        >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                <span>Create New Blog</span>
            </h2>

            <div className="space-y-4">
                {[
                    { name: "title", label: "Blog Title", placeholder: "Enter an engaging title" },
                    { name: "description", label: "Description", placeholder: "Brief summary of your blog" },
                    { name: "coverImage", label: "Cover Image URL", placeholder: "https://example.com/image.jpg" }
                ].map(({ name, label, placeholder }) => (
                    <div key={name}>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                            {label}
                        </label>
                        <input
                            required
                            name={name}
                            placeholder={placeholder}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                        />
                    </div>
                ))}

                <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Content
                    </label>
                    <textarea
                        required
                        name="content"
                        rows={5}
                        placeholder="Write your complete blog content here..."
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-purple-600"
                >
                    {mutation.isPending ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="animate-spin">◌</span>
                            Publishing...
                        </span>
                    ) : (
                        "Publish Blog"
                    )}
                </button>
            </div>
        </form>
    );
}
