import Player from "../Player";
import Playlist from "../Playlist";
import "./DetailPage.css";

function DetailPage() {
  return (
    <main className="Page Details-page">
      <h1>Details Page</h1>

      <div className="Left-content">
        <Player />
      </div>
      <div className="Right-content">
        <Playlist />
      </div>
    </main>
  );
}

export default DetailPage;
