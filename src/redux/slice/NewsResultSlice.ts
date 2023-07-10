import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { News } from "../api/types";

export type NewsResultState = {
  page: number;
  keyword: string;
  data: [] | News[];
};
const initialState: NewsResultState = {
  page: 1,
  keyword: "",
  data: [],
};

const NewsResultSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNewsResults: (
      state: NewsResultState,
      action: PayloadAction<{
        page?: number;
        keyword?: string;
        data?: [] | News[];
      }>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewsResults } = NewsResultSlice.actions;

export default NewsResultSlice.reducer;
