import "./Playlist.css";
import shazamSearch from "../store/shazam-search.json";

const { artists: artistsResults, tracks: tracksResults } = shazamSearch;
const tracks = tracksResults.hits.map((hit) => hit.track);

console.log(artistsResults, tracksResults);
function Playlist() {
  return (
    <div>
      <h2>Tracks</h2>
      <ul className="Playlist">
        {tracks.map((track) => {
          console.log(track);
          return (
            <li key={track.key} className="Track">
              <a
                href={track.url}
                target="_blank"
                rel="noreferrer"
              >{`${track.title} - ${track.subtitle}`}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Playlist;
