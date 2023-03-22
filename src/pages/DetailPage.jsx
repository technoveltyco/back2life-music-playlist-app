import { useState } from "react";
import Player from "../components/Player.js";
import Playlist from "../components/Playlist.js";
import "./DetailPage.css";

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

  return (
    <main className="Page Details-page">
      <h1>Details Page</h1>

      <div className="Left-content">
        <Player song={song} reset={resetPlayer} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist} />
      </div>

      {playlist && (
        <div className="Right-content">
          <aside className="w-auto pr-4">
            <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg cursor-pointer">
              <h2 className="font-bold text-xl mb-2">Tracks</h2>
              <Playlist
                tracks={playlist}
                handleTrack={(id) => handleTrack(id)}
              />
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

export default DetailPage;
