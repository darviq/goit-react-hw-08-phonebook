import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import authSelectors from "../../redux/selectors/authSelectors";

const PrivateRoutes = ({path, exact, component: CurrentComponent}) => {
    const logged = useSelector(authSelectors.getLogged);

    return logged ? <Route path={path} exact={exact} component={CurrentComponent} /> : <Redirect to="/login" />;
};

export default PrivateRoutes;
