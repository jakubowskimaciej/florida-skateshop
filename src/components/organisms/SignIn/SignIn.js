import React, { useState } from 'react';
import { ButtonWrapper, FormWrapper, Wrapper } from './SignIn.styles';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';

import { auth, signInWithGoogle } from 'firebase/firebase.utils';

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setLoginData({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <Wrapper>
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>
      <FormWrapper onSubmit={handleSubmit}>
        <FormField
          name="email"
          type="email"
          label="email"
          value={loginData.email}
          onChange={handleChange}
        />
        <FormField
          name="password"
          type="password"
          label="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <ButtonWrapper>
          <Button type="submit">Sign in</Button>
          <Button isSecondary onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignIn;
