import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils";

export default createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/`, method: "post" }),
  endpoints: (builder) => ({}),
});
