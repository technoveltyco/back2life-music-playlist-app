import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Aside from "../components/Aside";

function CardsPage({
  tracks,
  setTrackToPlay,
  playlist,
  setPlaylist,
  addToPlaylist,
  removeFromPlaylist,
}) {
  const [hits, setHits] = useState(tracks);

  const cards = hits.map((hit) => {
    return {
      id: hit.id,
      title: hit.title,
      artist: hit.subtitle,
      albumImage: hit.images.coverart,
      songURL: hit.uriplayer,
      hit,
    };
  });

  const handlePlaySong = (track) => {
    setTrackToPlay(track);
  };

  return (
    <div className="main-page bg-gray-200">
      <div className="container mx-auto">
        <SearchBar setSongs={setHits} />
      </div>
      <div className="page-container p-6">
        <div className="grid lg:grid-cols-4">
          <div className="place-content-start">
            <Aside
              setTrackToPlay={setTrackToPlay}
              playlist={playlist}
              setPlaylist={setPlaylist}
              addToPlaylist={addToPlaylist}
              removeFromPlaylist={removeFromPlaylist}
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-3 col-span-3">
            {cards &&
              cards.map((item) => (
                <div
                  key={item.id}
                  className="w-full rounded-lg shadow-xl hover:shadow-2xl lg:max-w-sm"
                >
                  <img
                    className="object-cover w-full h-48"
                    src={item.albumImage}
                    alt="cover album"
                  />
                  <div className="p-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title} - {item.artist}
                    </h4>
                    <p className="mb-2 leading-normal">{item.genre}</p>
                    <Link to="/musicplayer">
                      <button
                        className="playbtn px-4 py-2 text-sm text-white bg-red-400 rounded shadow"
                        onClick={() => handlePlaySong(item.hit)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
