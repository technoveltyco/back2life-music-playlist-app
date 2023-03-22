import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchChartTracks } from "./api/index.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import CardsPage from "./pages/CardsPage";
import DetailPage from "./pages/DetailPage";

function App() {
  const [trackToPlay, setTrackToPlay] = useState(false);
  const [tracks, setTracks] = useState([]); // Search results tracks.
  const [playlist, setPlaylist] = useState([]); // User playlist.

  useEffect(() => {
    const getDefaultPlaylist = async () => {
      const tracksFetched = await fetchChartTracks();
      setTracks(tracksFetched);
    };

    getDefaultPlaylist();
  }, []);

  const handleAddToPlaylist = (track, e) => {
    e.preventDefault();
    setPlaylist([...playlist, track]);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            path="/results/*"
            element={
              <CardsPage
                tracks={tracks}
                setTrackToPlay={setTrackToPlay}
                playlist={playlist}
                setPlaylist={setPlaylist}
                handleAddToPlaylist={handleAddToPlaylist}
              />
            }
          />
          <Route
            path="/musicplayer"
            element={
              <DetailPage
                trackToPlay={trackToPlay}
                setTrackToPlay={setTrackToPlay}
                playlist={playlist}
                handleAddToPlaylist={handleAddToPlaylist}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
