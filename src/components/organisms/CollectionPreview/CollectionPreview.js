import React from 'react';
import CollectionItem from 'components/molecules/CollectionItem/CollectionItem';
import { PreviewWrapper, Wrapper } from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <PreviewWrapper>
        {items
          .filter((item, index) => index < 4)
          .map((itemData) => (
            <CollectionItem key={itemData.id} itemData={itemData} />
          ))}
      </PreviewWrapper>
    </Wrapper>
  );
};

export default CollectionPreview;
