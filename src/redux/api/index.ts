import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl, getCookie } from "../../utils";
import { News, NewsParams, NewsResponse, UserResponse } from "./types";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/`,
    headers: {
      Accept: "application/json",
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<UserResponse, null | void>({
      query: () => ({
        url: `user`,
        headers: {
          Authorization: `Bearer ${getCookie("id_1")}`,
          Accept: "application/json",
        },
      }),
      transformResponse: (response: { user: UserResponse }) => response.user,
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
    getNews: builder.query<NewsResponse, NewsParams | void>({
      query: (param) => ({
        url: `news`,
        headers: {
          Authorization: `Bearer ${getCookie("id_1")}`,
          Accept: "application/json",
        },
        params: param ? { ...param, page: param.page } : {},
      }),
      transformErrorResponse: (response: { status: string | number }) =>
        response,
    }),
  }),
});
export default api;
export const { useGetUserQuery, useGetNewsQuery } = api;
