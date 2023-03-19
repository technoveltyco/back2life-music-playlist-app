import shazamSongs from "./mocks/shazam-songs.json";

const fetchPlaylist = async () => {
  const { tracks: shazamTracks } = shazamSongs;
  const tracks = shazamTracks.hits.map((hit) => hit.track);
  const response = tracks;
  return await response;
};

export { fetchPlaylist };
