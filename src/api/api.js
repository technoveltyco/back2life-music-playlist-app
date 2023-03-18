import shazamSong from "./mocks/shazam-song.json";

const fetchSong = async (id) => {
  const response = id ? shazamSong : null;
  return await response;
};

export { fetchSong };
