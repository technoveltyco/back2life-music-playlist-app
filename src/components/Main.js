import { useEffect, useState } from "react";
// import { RouterProvider } from "react-router-dom";
// import router from "../routes";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../store/playlistSlice";
import { fetchChartTracks } from "../api/api.js";
import CardsPage from "../routes/CardsPage";
import DetailPage from "../routes/DetailPage";

// const songIdMock = "40333609"; // key attribute from shazam json song
export default function Main() {
  const dispatch = useDispatch();

  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const getDefaultPlaylist = async () => {
      const tracksFetched = await fetchChartTracks();
      setTracks(tracksFetched);
      setPlaylist(tracksFetched);
    };

    getDefaultPlaylist();
  }, []);

  return (
    <div className="Content bg-white">
      {/* <RouterProvider router={router} /> */}

      <CardsPage tracks={tracks} setPlaylist={setPlaylist} />
      <DetailPage playlist={playlist} />
    </div>
  );
}
