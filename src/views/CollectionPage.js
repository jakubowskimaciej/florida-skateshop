import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import CollectionItem from 'components/molecules/CollectionItem/CollectionItem';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 8rem;
`;

const ItemsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 32.5rem));
  place-content: space-between space-evenly;
  align-items: start;
  gap: 3rem 2rem;
`;

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
