import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { fetchChartTracks } from "./api/index.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import CardsPage from "./pages/CardsPage";
import DetailPage from "./pages/DetailPage";

const PlaylistContext = createContext(null);

function App() {
  const [trackToPlay, setTrackToPlay] = useState(false);
  const [tracks, setTracks] = useState([]); // Search results tracks.
  const [playlist, setPlaylist] = useState([]); // User playlist.

  useEffect(() => {
    const savedPlaylist = JSON.parse(localStorage.getItem("playlist")) || false;
    if (savedPlaylist) {
      setTracks(savedPlaylist);
      setTrackToPlay(savedPlaylist[0]);
      setPlaylist(savedPlaylist);
    } else {
      (async () => {
        const tracksFetched = await fetchChartTracks();
        if (tracksFetched) {
          setTracks(tracksFetched);
          setTrackToPlay(tracksFetched[0]);
        }
      })();
    }
  }, []);

  const addToPlaylist = (track) => {
    const newPlaylist = [...playlist, track];
    setPlaylist(newPlaylist);
    localStorage.setItem("playlist", JSON.stringify(newPlaylist));
  };

  const removeFromPlaylist = (track) => {
    const newPlaylist = playlist.filter(
      (trackPlaylist) => trackPlaylist.id !== track.id
    );
    setPlaylist(newPlaylist);
    localStorage.setItem("playlist", JSON.stringify(newPlaylist));
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
                addToPlaylist={addToPlaylist}
                removeFromPlaylist={removeFromPlaylist}
              />
            }
          />
          <Route
            path="/musicplayer"
            element={
              <PlaylistContext.Provider value={{ trackToPlay, playlist }}>
                <DetailPage
                  trackToPlay={trackToPlay}
                  playlist={playlist}
                  addToPlaylist={addToPlaylist}
                  removeFromPlaylist={removeFromPlaylist}
                />
              </PlaylistContext.Provider>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
export { PlaylistContext };
