import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  ButtonStyle,
  Container,
  InputStyle,
  Label,

} from 'components/App.styled';
import { Forms } from 'components/ContactForm/ContactForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Container>
      <Forms onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <InputStyle
            type="text"
            name="name"
            placeholder="Enter name ..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Email
          <InputStyle
            type="email"
            name="email"
            placeholder="Enter email ..."
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua."
            required
          />
        </Label>
        <Label>
          Password
          <InputStyle
            type="password"
            name="password"
            placeholder="Enter password ..."
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
            required
          />
        </Label>
        <ButtonStyle type="submit">Register</ButtonStyle>
      </Forms>
    </Container>
  );
};
