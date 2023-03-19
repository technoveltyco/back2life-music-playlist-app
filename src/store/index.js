import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlistSlice";

export default configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});
