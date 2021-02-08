import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import App from "./components/App";
import "./index.css";
import {store, persistor} from "./redux/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
