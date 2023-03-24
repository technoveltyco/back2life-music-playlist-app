import { useEffect, useState } from "react";

function Player({ song, reset, handleFavourite }) {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTimer, setCurrentTimer] = useState(convertSecondsToTime(0));
  const [totalTimer, setTotalTimer] = useState(convertSecondsToTime(0));

  useEffect(() => {
    if (!song) {
      return;
    }

    if (reset) {
      resetPlayer();
    }

    // Audio and JavaScript handler for timig.
    const audioElement = new Audio(song.uriplayer);
    audioElement.addEventListener("loadeddata", () => {
      setTotalTimer(convertSecondsToTime(audioElement.duration));
    });
    audioElement.addEventListener("timeupdate", () => {
      setCurrentTimer(convertSecondsToTime(audioElement.currentTime));
    });
    audioElement.addEventListener("ended", () => {
      setPlaying(false);
      setCurrentTimer(convertSecondsToTime(0));
    });

    setAudio(audioElement);
  }, [song, reset]);

  function resetPlayer() {
    if (playing) {
      setPlaying(false);
    }

    if (audio) {
      audio.pause();
      setAudio(null);
    }

    setCurrentTimer(convertSecondsToTime(0));
    setTotalTimer(convertSecondsToTime(0));
  }

  // Event handlers.
  function handlePlay() {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }

  function convertSecondsToTime(seconds) {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  }

  return (
    <>
      {song && (
        <div className="Player-widget">
          {/* <div className="w-full"> */}
            <div className="flex items-center justify-center h-screen bg-red-lightest">
              <div
                className="bg-white shadow-lg rounded-lg"
                style={{ width: "45rem !important" }}
              >
                <div className="flex">
                  <div className="Player-songcover">
                    <img
                      className="w-full rounded hidden md:block"
                      src={song.images.coverart}
                      alt={`${song.type} cover of ${song.title}, ${song.subtitle}`}
                      srcSet={song.images.coverarthq}
                    />
                  </div>
                  <div className="w-full p-14">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="Player-songtitle text-2xl text-grey-darkest font-medium">
                          {song.title}
                        </h3>
                        <p className="Player-songsubtitle text-sm text-grey mt-1">
                          {song.subtitle}
                        </p>
                      </div>
                      <div
                        id="Favourite-btn"
                        className="Favourite text-red-lighter"
                        onClick={() => handleFavourite(song)}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                      <div className="text-grey-darker">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
                        </svg>
                      </div>
                      <div className="text-grey-darker">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                        </svg>
                      </div>
                      <div
                        id="PlayHandlerBtn"
                        onClick={() => handlePlay()}
                        className="Player-playhandler-btn text-gray-darker p-8 rounded-full bg-red-light shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
                          />
                        </svg>
                      </div>
                      <div className="text-grey-darker">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                        </svg>
                      </div>
                      <div className="text-grey-darker">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-8 py-4">
                  <div
                    id="Timers"
                    className="Player-timers flex justify-between text-sm text-grey-darker"
                  >
                    <p>{currentTimer}</p>
                    <p>{totalTimer}</p>
                  </div>
                  <div className="mt-1">
                    <div className="h-1 bg-grey-dark rounded-full">
                      <div className="w-1/5 h-1 bg-red-light rounded-full relative">
                        <span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
}

export default Player;
