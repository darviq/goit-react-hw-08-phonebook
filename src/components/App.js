import React, {Suspense} from "react";
import {Switch, Redirect} from "react-router-dom";
import Header from "./header/Header";
import mainRoutes from "../routes/mainRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Switch>
                    {mainRoutes.map(route => (route.isPrivate ? <PrivateRoutes key={route.path} {...route} /> : <PublicRoutes key={route.path} {...route} />))}
                    <Redirect to="/register" />
                </Switch>
            </Suspense>
        </>
    );
};

export default App;
