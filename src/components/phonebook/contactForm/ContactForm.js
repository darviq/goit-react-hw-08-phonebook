import React, {useState} from "react";
import {useDispatch} from "react-redux";
import Notification from "./notification/Notification";
import {addContactOperation} from "../../../redux/operations/contactOperations";
import Form from "./ContactFormStyled";

const ContactForm = ({contacts}) => {
    const [state, setState] = useState({
        name: "",
        number: "",
        showNotification: false,
    });

    const dispatch = useDispatch();

    const contactExists = () => {
        setState(prevState => ({
            ...prevState,
            showNotification: true,
        }));
        setTimeout(() => {
            setState(prevState => ({
                ...prevState,
                showNotification: false,
            }));
        }, 4000);
    };

    const inputHandler = e => {
        const {name, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = e => {
        e.preventDefault();
        if (contacts.find(contact => contact.name === state.name)) {
            contactExists();
        } else {
            dispatch(addContactOperation({name: state.name, number: state.number}));
            setState({name: "", number: "", showNotification: false});
        }
    };

    return (
        <>
            <Form onSubmit={submitHandler}>
                <label>
                    Name
                    <input type="text" value={state.name} name="name" onChange={inputHandler} />
                </label>
                <label>
                    Number
                    <input type="text" value={state.number} name="number" onChange={inputHandler} />
                </label>
                <button type="submit">Add contact</button>
            </Form>
            <Notification showNotification={state.showNotification} />
        </>
    );
};

export default ContactForm;
