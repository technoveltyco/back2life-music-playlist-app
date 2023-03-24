import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopTenTracks } from "../api/index.js";


function Aside({
  playlist,
  setPlaylist,
  setTrackToPlay,
  addToPlaylist,
  removeFromPlaylist,
}) {
  const [topTen, setTopTen] = useState([]);

  useEffect(() => {
    (async () => {
      const topTenTracks = await fetchTopTenTracks();
      setTopTen(topTenTracks);
    })();
  }, []);

  const handleGoToPlaylist = (track) => {
    setTrackToPlay(track);
    setPlaylist(playlist);
  };

  return (
    <aside className="w-full pr-4 h-full">
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="font-semibold text-xl mb-2">10 top tracks this week</h2>
        <div className="flex flex-col w-full border divide-y shadow max-h-100 bg-white">
          {topTen &&
            topTen.map((track) => {
              return (
                <Link
                  to="/musicplayer"
                  className="flex justify-between hover:bg-red-100"
                  onClick={() => handleGoToPlaylist(track)}
                >
                  {`${track.title} - ${track.subtitle}`}
                  <button
                    className="add-btn hover:bg-gray-400 text-black font-sm rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToPlaylist(track);
                    }}
                  >
                    <svg
                      xmlns="https://icons.veryicon.com/png/o/miscellaneous/250-thick-line-icon-of-website-and-app/4-add-to-playlist.png"
                      fill="none"
                      viewBox="0 0 28 28"
                      strokeWidth={0.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </Link>
              );
            })}
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-2 pt-6">My Playlist</h2>
          <ul className="grid grid-cols-1 w-full shadow bg-white list-none">
            {(() => {
              if (!playlist.length) {
                return (
                  <span className="text-gray-800">
                    You have no tracks on your playlist yet.
                  </span>
                );
              } else {
                return playlist.map((track) => {
                  return (
                    <li
                      key={track.id}
                      className="flex items-center justify-between py-2 px-4"
                    >
                      <Link
                        to="/musicplayer"
                        className="flex justify-between hover:bg-red-100"
                        onClick={() => handleGoToPlaylist(track)}
                      >
                        <span className="text-gray-800">
                          {`${track.title} - ${track.subtitle}`}
                        </span>
                      </Link>
                    </li>
                  );
                });
              }
            })()}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
