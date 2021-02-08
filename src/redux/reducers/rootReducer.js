import {combineReducers} from "redux";
import contactsReducer from "./contactsReducer";
import loadingReducer from "./loadingReducer";
import errorsReducer from "./errorsReducer";
import filterReducer from "./filterReducer";

const rootReducer = {
    contacts: combineReducers({
        items: contactsReducer,
        loading: loadingReducer,
        errors: errorsReducer,
        filter: filterReducer,
    }),
};

export default rootReducer;
