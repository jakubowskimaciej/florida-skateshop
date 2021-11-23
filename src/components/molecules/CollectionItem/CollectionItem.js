import { addItem } from 'actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledFooter,
  StyledImage,
  Wrapper,
  StyledButton,
} from './CollectionItem.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <Wrapper>
      <StyledImage image={imageUrl} />
      <StyledFooter>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </StyledFooter>
      <StyledButton onClick={() => dispatch(addItem(item))}>
        Add to cart
      </StyledButton>
    </Wrapper>
  );
};

export default CollectionItem;
