import { configureStore } from "@reduxjs/toolkit";
import { menuApi } from "./services/menuItems/menuApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [menuApi.reducerPath]: menuApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([menuApi.middleware]),
})

setupListeners(store.dispatch)