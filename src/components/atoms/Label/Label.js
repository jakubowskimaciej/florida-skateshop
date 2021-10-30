import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: var(--color-darkGrey);
`;
