import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  color: var(--color-darkGrey);
  text-transform: uppercase;
`;
