import shazamSongs from "./mocks/shazam-search.json";
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

const getCachedResponse = (cacheId) => {
  return sessionStorage.getItem(cacheId)
    ? JSON.parse(sessionStorage.getItem(cacheId))
    : false;
};

const fetchSongs = async () => {
  const cached = getCachedResponse(`fetchSongs`);
  if (cached) {
    return cached;
  }

  const { tracks } = shazamSongs;
  const response = tracks.hits.map((hit) => {
    const songMapped = songMapping(hit.track);
    sessionStorage.setItem(`fetchSongs`, JSON.stringify(songMapped));
    return songMapped;
  });
  return await response;
};

const fetchSong = async (key) => {
  if (key) {
    const cached = getCachedResponse(`fetchSong(${key})`);
    if (cached) {
      return cached;
    }

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cdcf75c0acmsh44586b63454a754p1809d3jsn141122f9a0da",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    return fetch(
      `https://shazam.p.rapidapi.com/songs/get-details?key=${key}&locale=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const songMapped = songMapping(response);
        sessionStorage.setItem(`fetchSong(${key})`, JSON.stringify(songMapped));
        return songMapped;
      })
      .catch((err) => console.error(err));
  }
  return await {};
};

const fetchChartTracks = async () => {
  const cached = getCachedResponse("fetchChartTracks");
  if (cached) {
    return cached;
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cdcf75c0acmsh44586b63454a754p1809d3jsn141122f9a0da",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  return await fetch(
    "https://shazam.p.rapidapi.com/charts/track?locale=en-GB&listId=ip-country-chart-GB&pageSize=6&startFrom=0",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const mappedResponse = response.tracks.map((track) => songMapping(track));
      sessionStorage.setItem(
        "fetchChartTracks",
        JSON.stringify(mappedResponse)
      );
      return mappedResponse;
    })
    .catch((err) => console.error(err));
};

const fetchSearch = async (term) => {
  const qsTerm = encodeURIComponent(term);
  const cached = getCachedResponse(`fetchSearch(${qsTerm})`);
  if (cached) {
    return cached;
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cdcf75c0acmsh44586b63454a754p1809d3jsn141122f9a0da",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  return await fetch(
    `https://shazam.p.rapidapi.com/search?term=${qsTerm}&locale=en-US&offset=0&limit=6`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const mappedResponse = response.tracks.hits.map((hit) =>
        songMapping(hit.track)
      );
      sessionStorage.setItem(
        `fetchSearch(${qsTerm})`,
        JSON.stringify(mappedResponse)
      );
      return mappedResponse;
    })
    .catch((err) => console.error(err));
};

export { fetchSongs, fetchSong, fetchSearch, fetchChartTracks };
