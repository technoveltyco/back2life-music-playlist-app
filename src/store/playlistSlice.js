import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    playlist: [],
  },
  reducers: {
    addPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

export const { addPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
