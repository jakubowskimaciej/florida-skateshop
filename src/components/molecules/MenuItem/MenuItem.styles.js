import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => (image ? image : null)});
  background-position: center;
  background-size: cover;
`;

export const StyledMenuItem = styled.div`
  min-width: 40rem;
  height: 35rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--color-darkGrey);
  border-radius: 1.2rem;
  margin: 0 0.75rem 1.5rem;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;

  &:hover {
    & ${ImageWrapper} {
      transform: scale(1.02);
      transition: transform 350ms ease-in-out;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
