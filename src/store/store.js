import { configureStore } from "@reduxjs/toolkit";
import { menuApi } from "./services/menuItems/menuApi";
import { inicioApi } from "./services/Inicio";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [menuApi.reducerPath]: menuApi.reducer,
        [inicioApi.reducerPath]: inicioApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([menuApi.middleware, inicioApi.middleware]),
})

setupListeners(store.dispatch)