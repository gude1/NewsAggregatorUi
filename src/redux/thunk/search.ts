import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBaseUrl, getCookie } from "../../utils";

type SearchAttributes = {
  keyword: string;
  source?: string;
  date?: string;
  category?: string;
  page?: number;
  onSuccess?: () => void;
  onFail?: () => void;
};

export type SearchPayloadError = {
  error: string;
  status: number | string;
};

export const searchNews = createAsyncThunk<void, SearchAttributes>(
  "news/search",
  async (_param, thunkApi) => {
    try {
      const res = await axios.post(
        `${getBaseUrl()}/news/search`,
        {
          keyword: _param.keyword,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${getCookie("id_1")}`,
          },
        }
      );
      return thunkApi.fulfillWithValue(res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("axioserror", err.response);
        return thunkApi.rejectWithValue({
          error:
            err?.response?.data?.error || "Search failed, please try again",
          status: err.response?.status,
        });
      }
      return thunkApi.rejectWithValue({
        error: "Search failed, please try again",
        status: 400,
      });
    }
  }
);
