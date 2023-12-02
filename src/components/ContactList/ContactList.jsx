import { useDispatch, useSelector } from 'react-redux';
// import { getFilter } from 'redux/filter/filterSlice';

import { ContactItemStyle, ContactListStyle } from './ContactsList.styled';
import { ButtonStyle, Container } from 'components/App.styled';

import { deleteContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Container>
      <ContactListStyle>
        {contacts.map(contact => (
          <ContactItemStyle key={contact.id}>
            {contact.name}: {contact.number}
            <ButtonStyle
              type="botton"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </ButtonStyle>
          </ContactItemStyle>
        ))}
      </ContactListStyle>
    </Container>
  );
};

