import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'



const persistConfig={
    key:"root",
    storage
}

const persistedReducer=persistReducer(persistConfig,authReducer)


export const store= configureStore({
    reducer:{
        auth:persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
})

export const persistor = persistStore(store)

