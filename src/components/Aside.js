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
        <h2 className="font-semibold text-xl mb-2 text-gray-800">
          10 top tracks this week
        </h2>
        <div className="flex flex-col w-full border divide-y shadow max-h-100 bg-white">
          {topTen &&
            topTen.map((track) => {
              return (
                <Link
                  to="/musicplayer"
                  className="flex justify-between hover:bg-red-100"
                  onClick={() => handleGoToPlaylist(track)}
                >
                  <span className="text-gray-800">
                    {`${track.title} - ${track.subtitle}`}
                  </span>
                  <button
                    className="add-btn hover:bg-blue-100 text-red font-sm rounded"
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
                      stroke="black"
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
        <h2 className="font-semibold text-xl mb-2 pt-6 text-gray-800">
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
          </span>
          My Playlist
        </h2>
        <div className="flex flex-col w-full border divide-y shadow max-h-100 bg-white">
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
                  <Link
                    key={track.id}
                    to="/musicplayer"
                    className="flex justify-between hover:bg-red-100"
                    onClick={() => handleGoToPlaylist(track)}
                  >
                    <span className="text-gray-800">
                      {`${track.title} - ${track.subtitle}`}
                    </span>
                    <button
                      className="add-btn hover:bg-blue-100 text-red font-sm rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeFromPlaylist(track);
                      }}
                    >
                      <svg
                        fill="#000000"
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        id="delete-playlist-2"
                        data-name="Line Color"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon line-color"
                      >
                        <path
                          id="secondary"
                          d="M14,15h7m-7,4h7"
                          style={{
                            fill: "none",
                            stroke: "rgb(44, 169, 188)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                        <line
                          id="secondary-2"
                          data-name="secondary"
                          x1="17.5"
                          y1="4"
                          x2="20.5"
                          y2="7"
                          style={{
                            fill: "none",
                            stroke: "rgb(44, 169, 188)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></line>
                        <line
                          id="secondary-3"
                          data-name="secondary"
                          x1="20.5"
                          y1="4"
                          x2="17.5"
                          y2="7"
                          style={{
                            fill: "none",
                            stroke: "rgb(44, 169, 188)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></line>
                        <path
                          id="primary"
                          d="M10,17.5V3M6.5,14A3.5,3.5,0,1,0,10,17.5,3.5,3.5,0,0,0,6.5,14Z"
                          style={{
                            fill: "none",
                            stroke: "rgb(0, 0, 0)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                      </svg>
                    </button>
                  </Link>
                );
              });
            }
          })()}
        </div>
      </div>
    </aside>
  );
}

export default Aside;
