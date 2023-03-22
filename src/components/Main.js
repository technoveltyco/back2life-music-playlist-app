import { useEffect, useState } from "react";
// import { RouterProvider } from "react-router-dom";
// import router from "../routes";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../store/playlistSlice";
import { fetchChartTracks } from "../api/api.js";
import CardsPage from "../routes/CardsPage";
import DetailPage from "../routes/DetailPage";

export default function Main() {
  const dispatch = useDispatch();

  const [hits, setHits] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const getPlaylist = async () => {
      const songsFetched = await fetchChartTracks();
      setHits(songsFetched);
      setPlaylist(songsFetched);
    };

    getPlaylist();
  }, []);

  return (
    <div className="Content bg-white">
      {/* <RouterProvider router={router} /> */}

      <CardsPage hits={hits} />
      <DetailPage playlist={playlist} />
    </div>
  );
}
