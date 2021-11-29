import styled from 'styled-components';

export const StyledItem = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5rem;

  p {
    width: 23%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0 1rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23%;

    div {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3.5rem;
  padding: 1rem 0;

  img {
    width: 8rem;
    border-radius: 0.8rem;
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
      0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  }
`;

export const ButtonWrapper = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
