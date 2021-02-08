import React, {Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "./header/Header";
import mainRoutes from "../routes/mainRoutes";

const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Switch>
                    {mainRoutes.map(({path, exact, component: CurrentComponent}) => (
                        <Route path={path} exact={exact} key={path} component={CurrentComponent} />
                    ))}
                </Switch>
                {/* <Redirect to="/contacts" /> */}
            </Suspense>
        </>
    );
};

export default App;
