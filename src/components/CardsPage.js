import React from "react";

const cards = [
    {
        title: "Card 1",
        songtitle: "This is the first card.",
        albumImage: "https://trace.company/wp-content/uploads/2017/08/AFROBEATS-vignette-970x546-1.jpg",
        songImage: "",
        genre: "Afrobeats",
        album: "",
        track: "",
        songURL: "",
    },
    {
        title: "Card 2",
        songTitle: "This is the second card.",
        albumImage: "https://cdn5.vectorstock.com/i/1000x1000/77/09/colorful-detailed-pop-music-can-vector-19847709.jpg",
        songImage: "",
        genre: "Pop",
        album: "",
        track: "",
        songURL: "",
    },
    {
        title: "Card 3",
        songTitle: "This is the third card.",
        albumImage: "https://www.musicgrotto.com/wp-content/uploads/2022/05/best-rnb-songs-text-woman-listening-to-music-in-headphones-graphic.jpg",
        songImage: "",
        genre: "R&B",
        album: "",
        track: "",
        songURL: "",
    },
    {
        title: "Card 4",
        songtitle: "This is the fourth card.",
        albumImage: "https://cdn4.vectorstock.com/i/1000x1000/17/23/lets-rock-music-print-graphic-design-with-guitar-vector-23381723.jpg",
        songImage: "",
        genre: "Rock",
        album: "",
        track: "",
        songURL: "",
    },
    {
        title: "Card 5",
        songtitle: "This is the fifth card.",
        albumImage: "https://www.shutterstock.com/shutterstock/photos/1936226095/display_1500/stock-vector-classical-music-instruments-poster-vector-flat-style-illustration-classic-orchestra-acoustic-flyer-1936226095.jpg",
        songImage: "",
        genre: "Classical",
        album: "",
        track: "",
        songURL: "",
    },
    {
        title: "Card 6",
        songtitle: "This is the sixth card.",
        albumImage: "https://img.freepik.com/free-vector/hand-drawn-country-music-illustration_52683-86250.jpg?w=2000",
        songImage: "",
        genre: "Country",
        album: "",
        track: "",
        songURL: "",
    },
];

function CardsPage() {
    return (
        <div>
            <div class="container mx-auto">
                <div className="flex items-center flex-row-reverse">
                    <div className="flex space-x-1 basis-1/2">
                        <input
                            type="text"
                            className="block w-full px-4 py-2 text-black-700 bg-white border rounded-full focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="What's your flavour..."
                        />
                        <button className="px-4 text-white bg-red-400 rounded-full ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg "
                                className="w-8 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3} >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="page-container p-8">
                <div className="grid  lg:grid-cols-4">
                    <div>
                        <aside className="w-auto pr-4">
                            <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg cursor-pointer">
                                <h2 className="font-bold text-xl mb-2">10 top tracks this week</h2>
                                <div class="grid grid-cols-1 gap-4">
                                    <li>Track 1</li>
                                    <li>Track 2</li>
                                    <li>Track 3</li>
                                    <li>Track 4</li>
                                    <li>Track 5</li>
                                    <li>Track 6</li>
                                    <li>Track 7</li>
                                    <li>Track 8</li>
                                    <li>Track 9</li>
                                    <li>Track 10</li>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-3 col-span-3">
                        {cards.map((items) => (
                            <div className="w-full rounded-lg shadow-md lg:max-w-sm">
                                <img
                                    className="object-cover w-full h-48"
                                    src={items.albumImage}
                                    alt="image"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold text-blue-600">
                                        {items.songTitle}
                                    </h4>
                                    <p className="mb-2 leading-normal">
                                        {items.genre}
                                    </p>
                                    <button className="px-6 py-2 text-sm text-white bg-red-400 rounded shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={3}
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardsPage;

