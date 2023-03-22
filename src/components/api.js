import shazamSongs from "../api/mocks/shazam-search.json";
// import shazamSong from "./mocks/shazam-song.json";

const songMapping = (shazamSong) => {
  const { key, title, subtitle, type, url, images, hub } = shazamSong;
  return {
    id: key,
    title: title,
    subtitle: subtitle,
    type: type,
    url: url,
    images: {
      background: images.background,
      coverart: images.coverart,
      coverarthq: images.coverarthq,
    },
    uriplayer: hub.actions.reduce((uri, action) => {
      if (Object.keys(action).includes("uri")) {
        uri = action.uri;
      }
      return uri;
    }, ""),
  };
};

const fetchSongs = async () => {
  const { tracks } = shazamSongs;
  const response = tracks.hits.map((hit) => {
    const songMapped = songMapping(hit.track);
    return songMapped;
  });
  return await response;
};

const fetchSong = async (id) => {
  if (id) {
    const { tracks } = shazamSongs;
    const response = tracks.hits
      .filter((hit) => {
        return hit.track.key === id;
      })
      .map((hit) => {
        const songMapped = songMapping(hit.track);
        return songMapped;
      });

    return await response[0];
  }
  return await {};
};

export { fetchSongs, fetchSong };
