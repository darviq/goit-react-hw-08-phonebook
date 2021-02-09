import styled from "styled-components";
import {useDispatch} from "react-redux";
import {logOut} from "../../../redux/reducers/authReducer";
import {clearContacts} from "../../../redux/reducers/contactsReducer";

const Li = styled.li`
    display: flex;
    padding: 15px;
    align-items: center;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);

    button {
        margin-left: 15px;
        padding: 5px;

        :hover,
        :focus {
            background-color: hotpink;
        }
    }
`;

const UserMenu = ({email}) => {
    const dispatch = useDispatch();

    const buttonHandler = () => {
        dispatch(clearContacts());
        dispatch(logOut());
    };

    return (
        <Li>
            <span>{email}</span>
            <button onClick={buttonHandler}>LogOut</button>
        </Li>
    );
};

export default UserMenu;
