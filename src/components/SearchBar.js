
function SearchBar() {
    return (
        <div className="flex items-center flex-row-reverse pt-3">
            <div className="flex space-x-1 basis-1/2">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-black-700 bg-white border rounded-full focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 autocmplete='on' "
                    placeholder="What's your flavour..."
                />
                <button className="px-4 text-white bg-red-400 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg "
                        className="w-8 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3} >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;