import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadContactsOperation} from "../../../redux/operations/contactsOperations";
import contactsSelectors from "../../../redux/selectors/contactsSelectors";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import {Div, H1} from "./ContactsStyled";

const Contacts = () => {
    const contacts = useSelector(contactsSelectors.getContacts);
    const loading = useSelector(contactsSelectors.getLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContactsOperation());
    }, []);

    return (
        <Div>
            <H1 in={true} appear timeout={500}>
                {loading ? "Loading..." : "Phonebook"}
            </H1>
            <ContactForm contacts={contacts} />
            {contacts.length > 0 && (
                <>
                    <h2>Contacts</h2>
                    <Filter />
                </>
            )}
            <ContactList />
        </Div>
    );
};

export default Contacts;
