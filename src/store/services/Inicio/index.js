import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const inicioApi = createApi({
    reducerPath: "inicioApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_STRAPI_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = process.env.NEXT_PUBLIC_API_TOKEN;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getInicioQuery: builder.query({
          query: () =>
            "inicio?populate[InicioDynamic][populate]=*",
        }),
      }), 
});

export const { useGetInicioQueryQuery, usePrefetch } = inicioApi;