import "./Playlist.css";

function Playlist({ tracks, onClick }) {
  return (
    <>
      {tracks.length && (
        <ul className="Playlist font-bold text-xl mb-2">
          <div className="grid grid-cols-1 gap-4">
            {tracks.map((track) => {
              return (
                <li key={track.id} className="Track">
                  <a
                    onClick={(e) => onClick(track.id, e)}
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
