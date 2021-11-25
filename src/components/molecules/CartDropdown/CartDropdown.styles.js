import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  position: absolute;
  width: 35rem;
  height: 44rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 0.1rem solid var(--color-black);
  background-color: var(--color-white);
  top: 7rem;
  right: 2.5rem;
  z-index: 5;
`;

export const ItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  h2 {
    color: var(--color-darkGrey);
  }
`;

export const StyledButton = styled(Button)`
  text-transform: capitalize;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;

    &:hover {
      background-color: var(--color-darkGrey);
      color: var(--color-white);
    }
  }
`;
