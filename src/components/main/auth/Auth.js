import {useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {signUpOperation, signInOperation} from "../../../redux/operations/authOperations";

const Form = styled.form`
    width: 300px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    padding: 25px;
    margin: 25px 0 0 25px;

    label {
        display: block;
    }

    input {
        display: block;
        width: 100%;
        height: 26px;
    }

    button {
        width: 100%;
        height: 26px;
        margin-top: 10px;
        background-color: honeydew;
    }

    button:hover,
    button:focus {
        background-color: lightgreen;
    }
`;

const Auth = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const location = useLocation();
    const dispatch = useDispatch();

    const inputHandler = e => {
        const {name, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = e => {
        e.preventDefault();
        if (location.pathname === "/register") {
            dispatch(signUpOperation(state));
        } else dispatch(signInOperation(state));
        setState({email: "", password: ""});
    };

    return (
        <Form onSubmit={submitHandler}>
            <label>
                Email
                <input type="text" value={state.email} name="email" onChange={inputHandler} />
            </label>
            <label>
                Password
                <input type="text" value={state.password} name="password" onChange={inputHandler} />
            </label>
            <button type="submit">{location.pathname === "/register" ? "SignUp" : "SignIn"}</button>
        </Form>
    );
};

export default Auth;
