import { useEffect, useState } from "react";
import { fetchSong } from "../../api/api.js";
import Player from "../Player";
import Playlist from "../Playlist";
import "./DetailPage.css";

const songIdMock = "40333609"; // key attribute from shazam json song

function DetailPage({ songId = songIdMock, playlist = false }) {
  const [song, setSong] = useState(false);
  const [resetPlayer, setResetPlayer] = useState(false);

  const getSong = async (songId) => {
    const songFetched = await fetchSong(songId);
    setSong(songFetched);
  };

  useEffect(() => {
    getSong(songId);
  }, [songId]);

  const handleTrack = (songId, e) => {
    e.preventDefault();
    getSong(songId);
    setResetPlayer(true);
  };

  return (
    <main className="Page Details-page">
      <h1>Details Page</h1>

      <div className="Left-content">
        <Player song={song} reset={resetPlayer} />
      </div>

      {playlist && (
        <div className="Right-content">
          <aside className="w-auto pr-4">
            <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg cursor-pointer">
              <h2 className="font-bold text-xl mb-2">Tracks</h2>
              <Playlist
                tracks={playlist}
                onClick={(id, e) => handleTrack(id, e)}
              />
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

export default DetailPage;
