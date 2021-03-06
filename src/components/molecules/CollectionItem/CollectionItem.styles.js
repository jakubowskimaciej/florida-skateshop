import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  height: 40rem;
  align-items: center;
  margin: 1rem;
  position: relative;
  transition: all 200ms ease;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin: 2rem;
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => (image ? image : null)});
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
    0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);

  ${Wrapper}:hover & {
    opacity: 0.87;
  }
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  font-size: 1.8rem;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledButton = styled(Button)`
  width: 80%;
  opacity: 0.88;
  position: absolute;
  bottom: 2rem;
  display: none;

  ${Wrapper}:hover & {
    display: block;
  }
`;
