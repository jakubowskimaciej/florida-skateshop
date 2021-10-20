import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 8rem;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    color: var(--color-darkGrey);
  }
`;

export const PreviewWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
