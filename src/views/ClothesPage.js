import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from 'components/organisms/CollectionPreview/CollectionPreview';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const ClothesPage = () => {
  const shopItems = useSelector((state) => state.collection);

  return (
    <Wrapper>
      {shopItems.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </Wrapper>
  );
};

export default ClothesPage;
