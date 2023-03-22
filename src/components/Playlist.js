import "./Playlist.css";

function Playlist({ tracks, handleTrack }) {
  return (
    <>
      {tracks.length && (
        <ul className="Playlist font-bold text-xl mb-2">
          <div className="grid grid-cols-1 gap-4">
            {tracks.map((track) => {
              return (
                <li key={track.id} className="Track">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleTrack(track.id);
                    }}
                    href={track.url}
                    target="_blank"
                    rel="noreferrer"
                  >{`${track.title} - ${track.subtitle}`}</a>
                </li>
              );
            })}
          </div>
        </ul>
      )}
    </>
  );
}

export default Playlist;
