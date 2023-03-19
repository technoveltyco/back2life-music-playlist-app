import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPlaylist } from "./store/playlistSlice";
import CardsPage from "./components/CardsPage";
import DetailPage from "./components/pages/DetailPage";
import { fetchSongs } from "./api/api.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [hits, setHits] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const getPlaylist = async () => {
      const songsFetched = await fetchSongs();
      setHits(songsFetched);
      setPlaylist(songsFetched);
    };

    getPlaylist();
  }, []);

  return (
    <div className="App">
      <CardsPage hits={hits} />
      <DetailPage playlist={playlist} />
    </div>
  );
}

export default App;
