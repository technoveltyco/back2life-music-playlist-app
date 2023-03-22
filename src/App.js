import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchChartTracks } from "./api/api.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import CardsPage from "./pages/CardsPage";
import DetailPage from "./pages/DetailPage";

function App() {
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
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            path="/results/*"
            element={<CardsPage tracks={tracks} setPlaylist={setPlaylist} />}
          />
          <Route
            path="/musicplayer"
            element={<DetailPage playlist={playlist} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
