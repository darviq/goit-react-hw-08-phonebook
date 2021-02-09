import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import authSelectors from "../../../redux/selectors/authSelectors";

const NavItem = ({path, exact, name, isPrivate}) => {
    const logged = useSelector(authSelectors.getLogged);

    return (
        <>
            {!logged && !isPrivate && (
                <li>
                    <NavLink to={path} exact={exact} className="link" activeClassName="active-link">
                        {name}
                    </NavLink>
                </li>
            )}

            {logged && isPrivate && (
                <li>
                    <NavLink to={path} exact={exact} className="link" activeClassName="active-link">
                        {name}
                    </NavLink>
                </li>
            )}
        </>
    );
};

export default NavItem;
