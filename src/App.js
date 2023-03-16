import CardsPage from "./components/CardsPage";
import DetailPage from "./components/pages/DetailPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CardsPage />
      <DetailPage />

      <audio
        id="audioTest"
        controls
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cb/24/ac/cb24ac75-128c-f817-7d81-7fbffbdaafe3/mzaf_1522770279362005862.plus.aac.ep.m4a"
      ></audio>
    </div>
  );
}

export default App;
