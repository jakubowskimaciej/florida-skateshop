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
  border-radius: 0.5rem;
  margin: 0 0.75rem 1.5rem;
  position: relative;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
    0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & ${ImageWrapper} {
      transform: scale(1.02);
      transition: transform 350ms ease-in-out;
    }
  }

  &:first-child {
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }
`;
