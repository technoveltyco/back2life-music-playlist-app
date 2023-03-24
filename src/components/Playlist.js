function Playlist({ tracks, handleTrack, removeFromPlaylist }) {
  return (
    <>
      {!tracks.length && (
        <span className="text-gray-800">
          You have no tracks on your playlist yet.
        </span>
      )}
      {tracks && (
        <ul className="Playlist font-bold text-xl mb-2">
          <div className="grid grid-cols-1 gap-4">
            {tracks.map((track) => {
              return (
                <a
                  key={track.id}
                  className="flex justify-between hover:bg-red-100"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTrack(track.id);
                  }}
                  href={track.url}
                  target="_blank"
                  rel="noreferrer"
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
                      className="icon line-color"
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
                </a>
              );
            })}
          </div>
        </ul>
      )}
    </>
  );
}

export default Playlist;
