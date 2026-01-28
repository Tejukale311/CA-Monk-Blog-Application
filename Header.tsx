export const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">⚡</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">CA MONK</span>
                    </div>

                    <nav className="hidden md:flex gap-8">
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Tools</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Practice</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Events</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Job Board</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Points</a>
                    </nav>
                    <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                        Profile
                    </button>
                </div>
            </div>
        </header>
    );
};
