import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { NEXT_PUBLIC_STRAPI_URL, NEXT_PUBLIC_API_TOKEN } = process.env;

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = '9b3fc3a16a01f1cb2a6a89c88b7c63e740fcfd3c0322de1ab23c551e8d0fab4a1133ff0832b73d5192a0313b82e61577af0d952611f2224946eb1d07ecf03d28373336040feb7485970d859d101db50894181303be0c068aa429217f27556e00ca5306cdd710b93da6f4eafba8b34ac2a1bd72edff00b330c5420e20097c19e1'
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getMenuItems: builder.query({
            query: () => 'main-menu?populate[0]=MainMenuItems&populate[1]=MainMenuItems.section&populate[2]=MainMenuItems.sections.links',
        }),
    }),
})

export const { useGetMenuItemsQuery } = menuApi