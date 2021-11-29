import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledItem = styled.div`
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

const ImageWrapper = styled.div`
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

const ButtonWrapper = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckoutItem = ({
  itemData: { imageUrl, name, quantity, price },
  clicked,
  removeItem,
  addItem,
}) => {
  return (
    <StyledItem>
      <ImageWrapper>
        <img src={imageUrl} alt={name} />
      </ImageWrapper>
      <p>{name}</p>
      <span>
        <div onClick={removeItem}>&#10094;</div>
        <p>{quantity}</p>
        <div onClick={addItem}>&#10095;</div>
      </span>
      <p>$ {price}</p>
      <ButtonWrapper>
        <Button isSmall onClick={clicked}>
          <FontAwesomeIcon icon={['fas', 'trash-alt']} />
        </Button>
      </ButtonWrapper>
    </StyledItem>
  );
};

export default CheckoutItem;
