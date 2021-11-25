import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;

  img {
    width: 8rem;
    border-radius: 0.5rem;
  }
`;

export const StyledInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
