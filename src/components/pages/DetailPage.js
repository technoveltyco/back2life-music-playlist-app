import Player from "../Player";
import Playlist from "../Playlist";
import "./DetailPage.css";

function DetailPage({ song, tracks = false }) {
  // console.log(song, tracks);
  return (
    <main className="Page Details-page">
      <h1>Details Page</h1>

      <div className="Left-content">
        <Player />
      </div>

      {tracks && (
        <div className="Right-content">
          <aside className="w-auto pr-4">
            <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg cursor-pointer">
              <h2 className="font-bold text-xl mb-2">Tracks</h2>
              <Playlist />
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

export default DetailPage;
