import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Aside from "../components/Aside";

// const cardsOld = [
//   {
//     title: "Card 1",
//     songtitle: "This is the first card.",
//     albumImage:
//       "https://trace.company/wp-content/uploads/2017/08/AFROBEATS-vignette-970x546-1.jpg",
//     songImage: "",
//     genre: "Afrobeats",
//     album: "",
//     track: "",
//     songURL: "",
//   },
//   {
//     title: "Card 2",
//     songTitle: "This is the second card.",
//     albumImage:
//       "https://cdn5.vectorstock.com/i/1000x1000/77/09/colorful-detailed-pop-music-can-vector-19847709.jpg",
//     songImage: "",
//     genre: "Pop",
//     album: "",
//     track: "",
//     songURL: "",
//   },
//   {
//     title: "Card 3",
//     songTitle: "This is the third card.",
//     albumImage:
//       "https://www.musicgrotto.com/wp-content/uploads/2022/05/best-rnb-songs-text-woman-listening-to-music-in-headphones-graphic.jpg",
//     songImage: "",
//     genre: "R&B",
//     album: "",
//     track: "",
//     songURL: "",
//   },
//   {
//     title: "Card 4",
//     songtitle: "This is the fourth card.",
//     albumImage:
//       "https://cdn4.vectorstock.com/i/1000x1000/17/23/lets-rock-music-print-graphic-design-with-guitar-vector-23381723.jpg",
//     songImage: "",
//     genre: "Rock",
//     album: "",
//     track: "",
//     songURL: "",
//   },
//   {
//     title: "Card 5",
//     songtitle: "This is the fifth card.",
//     albumImage:
//       "https://www.shutterstock.com/shutterstock/photos/1936226095/display_1500/stock-vector-classical-music-instruments-poster-vector-flat-style-illustration-classic-orchestra-acoustic-flyer-1936226095.jpg",
//     songImage: "",
//     genre: "Classical",
//     album: "",
//     track: "",
//     songURL: "",
//   },
//   {
//     title: "Card 6",
//     songtitle: "This is the sixth card.",
//     albumImage:
//       "https://img.freepik.com/free-vector/hand-drawn-country-music-illustration_52683-86250.jpg?w=2000",
//     songImage: "",
//     genre: "Country",
//     album: "",
//     track: "",
//     songURL: "",
//   },
// ];

function CardsPage() {
  const [hits, setHits] = useState([]);

  const cards = hits.map((hit) => {
    return {
      title: hit.title,
      artist: hit.subtitle,
      albumImage: hit.images.coverart,
      songImage: "",
      // genre: "Country",
      album: "",
      track: "",
      songURL: hit.uriplayer,
    };
  });

  return (
    <div>
      <div className="container mx-auto">
        <SearchBar setSongs={setHits} />
      </div>
      <div className="page-container p-6">
        <div className="grid lg:grid-cols-4">
          <div className="place-content-start">
            <Aside />
          </div>
          <div className="grid gap-4 lg:grid-cols-3 col-span-3">
            {cards &&
              cards.map((items) => (
                <div
                  key={items.id}
                  className="w-full rounded-lg shadow hover:shadow-xl lg:max-w-sm"
                >
                  <img
                    className="object-cover w-full h-48"
                    src={items.albumImage}
                    alt="cover album"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-blue-600">
                      {items.title} - {items.artist}
                    </h4>
                    <p className="mb-2 leading-normal">{items.genre}</p>
                    <button className="px-6 py-2 text-sm text-white bg-red-400 rounded shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
