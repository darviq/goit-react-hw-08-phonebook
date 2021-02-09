import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import authSelectors from "../../redux/selectors/authSelectors";

const PublicRoutes = ({path, exact, component: CurrentComponent}) => {
    const logged = useSelector(authSelectors.getLogged);

    return logged ? <Redirect to="/contacts" /> : <Route path={path} exact={exact} component={CurrentComponent} />;
};

export default PublicRoutes;
