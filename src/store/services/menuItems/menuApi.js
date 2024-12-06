import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { NEXT_PUBLIC_STRAPI_URL, NEXT_PUBLIC_API_TOKEN } = process.env;

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = 'e7fb5414d45c565f5f2da58cd128f9b684166ffb5ad82761a08f7886aa132fe4afdad847c46a309fca6ac8bb47aa56f04f14b1fe842db4bb1da81afe2fb6270b91e5ea980950f1e9487b79fbf586246667133a0462c6467ea9d484e7b96b44e316c73d32f63b8324a89c86369f792fa06ca564659d3a962fce238ad0d538a39e'
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