import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IBeer } from "../models/IBeer";

export const beerAPI = createApi({
  reducerPath: "beerAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://beer-api.onrender.com",
  }),
  tagTypes: ["Beer"],
  endpoints: (build) => ({
    fetchAllBeers: build.query<IBeer[], number>({
      query: (limit: number = 5) => ({
        url: "/beers",
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Beer"],
    }),
    createBeer: build.mutation<IBeer, IBeer>({
      query: (beer) => ({
        url: `/beers`,
        method: "POST",
        body: beer,
      }),
      invalidatesTags: ["Beer"],
    }),
    updateBeer: build.mutation<IBeer, IBeer>({
      query: (beer) => ({
        url: `/beers/${beer.id}`,
        method: "PUT",
        name: beer,
      }),
      invalidatesTags: ["Beer"],
    }),
    deleteBeer: build.mutation<IBeer, IBeer>({
      query: (beer) => ({
        url: `/beers/${beer.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Beer"],
    }),
  }),
});
