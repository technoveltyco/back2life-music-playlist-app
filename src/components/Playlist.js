import "./Playlist.css";
import shazamSearch from "../store/shazam-search.json";

const { artists: artistsResults, tracks: tracksResults } = shazamSearch;
const tracks = tracksResults.hits.map((hit) => hit.track);

console.log(artistsResults, tracksResults);
function Playlist() {
  const audio = new Audio(
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cb/24/ac/cb24ac75-128c-f817-7d81-7fbffbdaafe3/mzaf_1522770279362005862.plus.aac.ep.m4a"
  );

  return (
    <aside className="w-auto pr-4">
      <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg cursor-pointer">
        <h2 className="font-bold text-xl mb-2">Tracks</h2>
        <ul className="Playlist font-bold text-xl mb-2">
          <div class="grid grid-cols-1 gap-4">
            {tracks.map((track) => {
              return (
                <li key={track.key} className="Track">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      audio.play();
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
      </div>
    </aside>
  );
}

export default Playlist;
