import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import { FormWrapper, Wrapper } from '../SignIn/SignIn.styles';
import { auth, createUserProfileDoc } from 'firebase/firebase.utils';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [signUpState, setSignUpState] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = signUpState;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      setSignUpState(initialState);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <h2>I do not have an account.</h2>
      <span>Sign up with your email and password.</span>
      <FormWrapper onSubmit={handleSubmit}>
        <FormField
          name="displayName"
          type="text"
          label="display name"
          value={signUpState.displayName}
          onChange={handleChange}
        />
        <FormField
          name="email"
          type="email"
          label="email"
          value={signUpState.email}
          onChange={handleChange}
        />
        <FormField
          name="password"
          type="password"
          label="password"
          value={signUpState.password}
          onChange={handleChange}
        />
        <FormField
          name="confirmPassword"
          type="password"
          label="confirm password"
          value={signUpState.confirmPassword}
          onChange={handleChange}
        />
        <Button>Sing up</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignUp;
