
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Forms } from './ContactForm.styled';
import {
  ButtonStyle,
  Container,
  InputStyle,
  Label,
} from 'components/App.styled';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmitAddContact = event => {
    event.preventDefault();
    const newObj = { name, number };

    if (isNameNew(contacts, newObj) !== undefined) {
      alert(`${newObj.name} is already in contacts`);
      return;
    }

    dispatch(addContacts(newObj));

    reset();
  };

  const isNameNew = (contacts, newObj) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newObj.name.toLowerCase()
    );
  };

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Forms onSubmit={onSubmitAddContact}>
        <Label>
          Name
          <InputStyle
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={onChangeInput}
          />
        </Label>
        <Label>
          Phone number
          <InputStyle
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
            onChange={onChangeInput}
          />
        </Label>
        <ButtonStyle type="submit">Add contact</ButtonStyle>
      </Forms>{' '}
      <Filter />
    </Container>
  );
};

