import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonWrapper, ImageWrapper, StyledItem } from './CheckoutItem.styles';

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
