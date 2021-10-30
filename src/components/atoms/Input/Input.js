import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.7rem 1.2rem;
  margin: 1rem 0;
  border: 0.1rem solid var(--color-lightGrey);
  box-sizing: border-box;
  box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.09);
  border-radius: 2.5rem;
  transition: all 300ms ease;
  font-family: inherit;

  &:focus {
    outline: none;
    box-shadow: -0.2rem 0.4rem 1rem rgba(115, 124, 142, 0.5);
  }
`;
