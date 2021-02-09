import {TransitionGroup} from "react-transition-group";
import {useSelector} from "react-redux";
import contactsSelectors from "../../../../redux/selectors/contactsSelectors";
import {ContactItem, Li} from "./contactItem/ContactItem";

const ContactList = () => {
    const contactsToShow = useSelector(contactsSelectors.getFilteredContacts);

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
