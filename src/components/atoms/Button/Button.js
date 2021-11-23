import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ isSmall }) => (isSmall ? '0.7rem 1.7rem' : '1rem 2rem')};
  margin: 1.5rem 0;
  background-color: ${({ isSecondary }) =>
    isSecondary ? 'var(--color-blue)' : 'var(--color-darkGrey)'};
  color: var(--color-white);
  border-radius: 5rem;
  border: 0.1rem solid
    ${({ isSecondary }) =>
      isSecondary ? 'var(--color-blue)' : 'var(--color-darkGrey)'};
  font-size: ${({ theme }) => theme.fontSize.m};
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
    0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  transition: all 200ms ease;

  &:hover {
    background-color: var(--color-white);
    color: ${({ isSecondary }) =>
      isSecondary ? 'var(--color-blue)' : 'var(--color-darkGrey)'};
  }
`;
