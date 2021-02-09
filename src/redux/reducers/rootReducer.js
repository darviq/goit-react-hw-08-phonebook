import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsReducer";
import authReducer from "./authReducer";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["email", "idToken", "logged", "uid"],
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
