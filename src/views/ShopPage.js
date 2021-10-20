import React from 'react';
import CollectionPreview from 'components/organisms/CollectionPreview/CollectionPreview';
import { shopItems } from 'data/shopItems';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const ShopPage = () => {
  return (
    <Wrapper>
      {shopItems.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </Wrapper>
  );
};

export default ShopPage;
