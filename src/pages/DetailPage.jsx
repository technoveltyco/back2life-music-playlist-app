import { useState, useContext } from "react";
import Player from "../components/Player.js";
import Playlist from "../components/Playlist.js";
import { PlaylistContext } from "../App";

function DetailPage() {
  const { setTrackToPlay } = useContext(PlaylistContext);
  const { playlist } = useContext(PlaylistContext);
  const { removeFromPlaylist } = useContext(PlaylistContext);

  const [resetPlayer, setResetPlayer] = useState(false);

  const handlePlaylistTrack = (key) => {
    setResetPlayer(true);
    (async (key) => {
      const tracksFiltered = playlist.filter((track) => track.id === key);
      setTrackToPlay(tracksFiltered[0]);
    })(key);
  };

  return (
    <main className="Details-page h-fit flex flex-col md:flex-row">
      <div className="flex-1 bg-gray-200 Left-content">

        <Player reset={resetPlayer} />
      </div>

      {playlist && (
        <div className="flex bg-gray-200 Right-content">
            <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg cursor-pointer">
              <h2 className="font-bold text-xl mb-2 text-black">
                <span>
                  <svg
                    fill="#000000"
                    height="30px"
                    width="30px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    style={{ display: "inline-block" }}
                  >
                    <g>
                      <path d="M48,64h160c17.672,0,32-14.328,32-32c0-17.674-14.328-32-32-32H48C30.328,0,16,14.326,16,32C16,49.672,30.328,64,48,64z" />
                      <path
                        d="M48,160h160c17.672,0,32-14.328,32-32c0-17.674-14.328-32-32-32H48c-17.672,0-32,14.326-32,32
          C16,145.672,30.328,160,48,160z"
                      />
                      <path
                        d="M240,224c0-17.674-14.328-32-32-32H48c-17.672,0-32,14.326-32,32c0,17.672,14.328,32,32,32h160
          C225.672,256,240,241.672,240,224z"
                      />
                      <path
                        d="M411.328,75.914C393.043,61.805,368,42.477,368,32c0-17.672-14.328-32-32-32s-32,14.328-32,32v293.58
          c-10.023-3.549-20.762-5.58-32-5.58c-53.02,0-96,42.98-96,96s42.98,96,96,96s96-42.98,96-96V123.293
          c1.414,1.094,2.82,2.203,4.23,3.293c36.105,27.852,59.77,48.078,59.77,74.305c0,40.766-21.684,63.516-22.305,64.164
          c-12.672,12.32-12.961,32.578-0.641,45.25c6.273,6.453,14.605,9.695,22.949,9.695c8.035,0,16.082-3.008,22.301-9.055
          c4.27-4.148,41.695-42.484,41.695-110.055C496,141.25,449.051,105.023,411.328,75.914z"
                      />
                    </g>
                  </svg>
                  &nbsp;
                </span>
                Playlist / Tracks
              </h2>
              <Playlist
                tracks={playlist}
                handleTrack={(id) => handlePlaylistTrack(id)}
                removeFromPlaylist={removeFromPlaylist}
              />
            </div>
        </div>
      )}
    </main>
  );
}

export default DetailPage;
