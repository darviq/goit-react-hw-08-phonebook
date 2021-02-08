import contactsSelector from "../../../redux/selectors/contacts-selectors";
import {TransitionGroup} from "react-transition-group";
import {useSelector} from "react-redux";
import {ContactItem, Li} from "./contactItem/ContactItem";

const ContactList = () => {
    const contactsToShow = useSelector(contactsSelector.getFilteredContacts);

    return (
        <TransitionGroup component="ul">
            {contactsToShow.map(contact => (
                <Li key={contact.id} timeout={1000} mountOnEnter unmountOnExit>
                    <ContactItem {...contact} />
                </Li>
            ))}
        </TransitionGroup>
    );
};

export default ContactList;
