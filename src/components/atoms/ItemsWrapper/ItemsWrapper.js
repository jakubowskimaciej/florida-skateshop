import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 8rem;
`;

export const ItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 32.5rem));
  place-content: space-between space-evenly;
  align-items: start;
  gap: 3rem 2rem;
`;
