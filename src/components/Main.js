// import { useEffect, useState } from "react";
// // import { RouterProvider } from "react-router-dom";
// // import router from "../routes";
// import { useDispatch } from "react-redux";
// import { addPlaylist } from "../store/playlistSlice";
// import { fetchSongs } from "./api.js";
// import CardsPage from "../routes/CardsPage";
// import DetailPage from "../routes/DetailPage";
// import LandingPage from "../routes/LandingPage";

// export default function Main() {
//   const dispatch = useDispatch();

//   const [hits, setHits] = useState([]);
//   const [playlist, setPlaylist] = useState([]);

//   useEffect(() => {
//     const getPlaylist = async () => {
//       const songsFetched = await fetchSongs();
//       setHits(songsFetched);
//       setPlaylist(songsFetched);
//     };

//     getPlaylist();
//   }, []);

//   return (
//     <div className="Content bg-white">
//       {/* <RouterProvider router={router} /> */}
//       <LandingPage />
//       <CardsPage hits={hits} />
//       <DetailPage playlist={playlist} />
//     </div>
//   );
// }
