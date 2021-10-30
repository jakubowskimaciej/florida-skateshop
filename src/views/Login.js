import React from 'react';
import SignIn from 'components/organisms/SignIn/SignIn';
import styled from 'styled-components';
import SignUp from 'components/organisms/SignUp/SignUp';

const Wrapper = styled.section`
  width: 70%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 5rem auto;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    flex-direction: column;
    justify-content: center;
  }
`;

const Login = () => {
  return (
    <Wrapper>
      <SignIn />
      <SignUp />
    </Wrapper>
  );
};

export default Login;
