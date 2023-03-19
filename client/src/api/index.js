import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ credential }) => ({
        url: `auth/login`,
        method: "POST",
        body: { credential },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = baseApi;
