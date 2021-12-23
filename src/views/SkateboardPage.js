import React from 'react';
import styled from 'styled-components';

import { useParams, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import CollectionItem from 'components/molecules/CollectionItem/CollectionItem';
import { Title } from 'components/atoms/Title/Title';
import { StyledLink } from 'components/molecules/Navigation/Navigation.styles';
import {
  Wrapper,
  ItemsWrapper,
} from 'components/atoms/ItemsWrapper/ItemsWrapper';

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  height: 3.5rem;
`;

const SkateboardPage = () => {
  const skateboardsItems = useSelector((state) => state.skateboards);
  const { pathName } = useParams();

  if (!pathName) return <Redirect to="/skateboard/decks" />;

  return (
    <Wrapper>
      <NavWrapper>
        <StyledLink to="/skateboard/decks">decks</StyledLink>
        <StyledLink to="/skateboard/trucks">trucks</StyledLink>
        <StyledLink to="/skateboard/wheels">wheels</StyledLink>
        <StyledLink to="/skateboard/accessories">accessories</StyledLink>
      </NavWrapper>
      <Title>{pathName}</Title>
      <ItemsWrapper>
        {skateboardsItems
          .filter(({ routeName }) => routeName === pathName)
          .map(({ items }) =>
            items.map((items) => <CollectionItem key={items.id} item={items} />)
          )}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default SkateboardPage;
