import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadContactsOperation} from "../../redux/operations/contactOperations";
import contactsSelector from "../../redux/selectors/contacts-selectors";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import {Div, H1} from "./PhonebookStyled";

const Phonebook = () => {
    const contacts = useSelector(contactsSelector.getContacts);
    const loading = useSelector(contactsSelector.getLoadingStatus);
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

export default Phonebook;
