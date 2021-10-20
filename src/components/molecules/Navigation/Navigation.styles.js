import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  h1 {
    font-size: 2rem;
    cursor: pointer;
    color: var(--color-darkGrey);

    span {
      font-weight: 300;
    }
  }
`;

export const LinkWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 60%;
  }
`;

export const borderAnimation = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink).attrs({
  activeClassName: 'active-link',
})`
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  color: var(--color-darkGrey);
  text-decoration: none;
  transition: font-weight 200ms ease-in;
  position: relative;

  &.active-link {
    font-weight: 900;

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1rem;
      background-color: var(--color-darkGrey);
      animation: ${borderAnimation} 300ms ease-in;
    }
  }
`;
