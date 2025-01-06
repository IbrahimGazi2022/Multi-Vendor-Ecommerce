import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers';

const store = configureStore({
    reducer: rootReducer, // rootReducer file a sob reducer function gulo add korte hobe jeta ei khan theke call hbe
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        });
    },
    devTools: true
});

export default store;