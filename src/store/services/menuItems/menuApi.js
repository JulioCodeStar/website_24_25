import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { NEXT_PUBLIC_STRAPI_URL, NEXT_PUBLIC_API_TOKEN } = process.env;

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = NEXT_PUBLIC_API_TOKEN
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