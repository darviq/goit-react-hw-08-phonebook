import {useSelector} from "react-redux";
import styled from "styled-components";
import mainRoutes from "../../routes/mainRoutes";
import authSelectors from "../../redux/selectors/authSelectors";
import UserMenu from "./userMenu/UserMenu";
import NavItem from "./navItem/NavItem";

const Ul = styled.ul`
    display: flex;
    height: 120px;
    padding: 0 25px;
    align-items: center;
    list-style: none;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    li:not(:last-child) {
        margin-right: 25px;
    }
    .link {
        text-decoration: none;
        font-weight: 700;
        font-size: 24px;
        color: black;
    }
    .link:hover,
    .link:focus {
        text-decoration: underline;
    }
    .active-link {
        color: red;
    }
`;

const Header = () => {
    const email = useSelector(authSelectors.getEmail);

    return (
        <>
            <Ul>
                {mainRoutes.map(route => (
                    <NavItem key={route.path} {...route} />
                ))}
                {email && <UserMenu email={email} />}
            </Ul>
        </>
    );
};

export default Header;
