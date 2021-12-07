import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid var(--color-lightGrey);

  div {
    text-transform: capitalize;
    text-align: center;
    width: 23%;
    font-size: ${({ theme }) => theme.fontSize.m};

    &:last-child {
      margin-right: 2rem;
    }
  }
`;

export const StyledTotal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 5rem;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 200;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
