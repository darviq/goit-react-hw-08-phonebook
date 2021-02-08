import {configureStore} from "@reduxjs/toolkit";
import {persistStore} from "redux-persist";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
