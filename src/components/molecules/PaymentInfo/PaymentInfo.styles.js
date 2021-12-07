import styled from 'styled-components';

export const TestInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 500;
    color: var(--color-darkGrey);
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 300;
    color: var(--color-darkGrey);
  }
`;
