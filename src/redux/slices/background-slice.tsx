import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  video: "../../assets/wal1.mp4",
  video2: "../../assets/wal2.mp4",
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setNight: () => {},
    setLight: () => {},
  },
});

export const {setNight,setLight} = backgroundSlice.actions;
export default backgroundSlice.reducer;

