import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import CollectionItem from 'components/molecules/CollectionItem/CollectionItem';
import { Title } from 'components/atoms/Title/Title';
import {
  Wrapper,
  ItemsWrapper,
} from 'components/atoms/ItemsWrapper/ItemsWrapper';

const CollectionPage = () => {
  const { pathName } = useParams();
  const shopItems = useSelector((state) => state.collection);

  return (
    <Wrapper>
      <Title>{pathName}</Title>
      <ItemsWrapper>
        {shopItems
          .filter(({ routeName }) => routeName === pathName)
          .map(({ items }) =>
            items.map((items) => <CollectionItem key={items.id} item={items} />)
          )}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default CollectionPage;
