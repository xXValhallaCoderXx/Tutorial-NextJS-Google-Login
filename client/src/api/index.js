import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query(id) {
        return `user/profile`;
      },
      providesTags: ["auth"],
    }),
    loginUser: builder.mutation({
      query: ({ credential }) => ({
        url: `auth/login`,
        method: "POST",
        body: credential,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useLoginUserMutation } = baseApi;
