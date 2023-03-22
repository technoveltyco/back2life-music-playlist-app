import { useState, useEffect } from "react";
import { fetchSearch, fetchChartTracks } from "../api/api";

function SearchBar({ setSongs }) {
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    (async () => {
      const songs = await fetchChartTracks();
      setSongs(songs);
    })();
  }, []);

  // Event handlers.
  const handleSearchBox = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length >= 3) {
      setKeywords(searchTerm);
    }
  };

  const handleSearch = async () => {
    const term = keywords;
    setKeywords("");
    const songs = await fetchSearch(term);
    setSongs(songs);
  };

  return (
    <div className="flex items-center flex-row-reverse pt-3 justify-center">
      <div className="flex space-x-1 basis-3/4">
        <input
          type="text"
          className="block w-full px-4 py-2 text-black-700 bg-white border rounded-full focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 autocmplete='on' "
          placeholder="What's your flavour..."
          onChange={(e) => handleSearchBox(e)}
        />
        <button
          className="px-4 text-white bg-red-400 rounded-full "
          onClick={(e) => handleSearch()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg "
            className="w-8 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
