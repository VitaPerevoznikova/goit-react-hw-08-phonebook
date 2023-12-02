import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  ButtonStyle,
  Container,
  InputStyle,
  Label,
} from 'components/App.styled';
import { Forms } from 'components/ContactForm/ContactForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
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
          Email
          <InputStyle
            type="email"
            name="email"
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
            required
            placeholder="Enter email ..."
          />
        </Label>
        <Label>
          Password
          <InputStyle
            type="password"
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
            required
            placeholder="Enter password ..."
          />
        </Label>
        <ButtonStyle type="submit">LogIn</ButtonStyle>
      </Forms>
    </Container>
  );
};
