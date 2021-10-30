import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40rem;
  height: 50rem;
  padding: 2rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
    color: var(--color-darkGrey);
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin: 0 auto;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 2rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;
