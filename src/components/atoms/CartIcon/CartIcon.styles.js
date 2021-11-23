import styled from 'styled-components';
import { ReactComponent as ShoppingCartIcon } from 'assets/shopping-bag.svg';

export const Wrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingCartIcon)`
  width: 2.5rem;
  height: 4.5rem;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  bottom: 1.2rem;
`;
