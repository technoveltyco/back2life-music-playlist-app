import { useState } from "react";
import Player from "../components/Player.js";
import Playlist from "../components/Playlist.js";

function DetailPage({ trackToPlay, playlist, addToPlaylist, removeFromPlaylist }) {
  const [song, setSong] = useState(trackToPlay);
  const [resetPlayer, setResetPlayer] = useState(false);

  const handleTrack = (key) => {
    setResetPlayer(true);
    (async (key) => {
      const tracksFiltered = playlist.filter((track) => track.id === key);
      setSong(tracksFiltered[0]);
    })(key);
  };

  const handleFavourite = (track) => {
    if (playlist.find((trackPlaylist) => trackPlaylist.id === track.id)) {
      removeFromPlaylist(track);
    } else {
      addToPlaylist(track);
    }
  };

  return (
    <main className="h-fit Details-page flex flex-col md:flex-row">
      

      <div className="flex-1 bg-gray-200 Left-content">
        {/* <h1>Details Page</h1> */}
        <Player song={song} reset={resetPlayer} handleFavourite={handleFavourite} />
      </div>

      {playlist && (
        <div className="flex bg-gray-200 Right-content">
            <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg cursor-pointer">
              <h2 className="font-bold text-xl mb-2">Tracks</h2>
              <Playlist
                tracks={playlist}
                handleTrack={(id) => handleTrack(id)}
              />
            </div>
        </div>
      )}
    </main>
  );
}

export default DetailPage;
