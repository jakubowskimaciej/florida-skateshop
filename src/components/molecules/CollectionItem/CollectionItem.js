import React from 'react';
import { StyledFooter, StyledImage, Wrapper } from './CollectionItem.styles';

const CollectionItem = ({ itemData: { id, name, price, imageUrl } }) => {
  return (
    <Wrapper>
      <StyledImage image={imageUrl} />
      <StyledFooter>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </StyledFooter>
    </Wrapper>
  );
};

export default CollectionItem;
