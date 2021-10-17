import React from 'react';
import { StyledMenuItem, ImageWrapper } from './MenuItem.styles';
import ContentWrapper from 'components/atoms/ContentWrapper/ContentWrapper';

const MenuItem = ({ itemData: { title, imageUrl } }) => {
  return (
    <StyledMenuItem>
      <ImageWrapper image={imageUrl} />
      <ContentWrapper title={title} />
    </StyledMenuItem>
  );
};

export default MenuItem;
