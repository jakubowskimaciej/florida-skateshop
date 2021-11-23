import React from 'react';
import CollectionItem from 'components/molecules/CollectionItem/CollectionItem';
import {
  PreviewWrapper,
  Wrapper,
  InfoWrapper,
} from './CollectionPreview.styles';
import { Button } from 'components/atoms/Button/Button';
import { withRouter } from 'react-router';
import { Title } from 'components/atoms/Title/Title';

const CollectionPreview = ({ title, items, history }) => {
  const filtered = items.filter((item, index) => index < 4);

  console.log(filtered);

  return (
    <Wrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Button isSmall onClick={() => history.push(`/collection/${title}`)}>
          view all
        </Button>
      </InfoWrapper>
      <PreviewWrapper>
        {filtered.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </PreviewWrapper>
    </Wrapper>
  );
};

export default withRouter(CollectionPreview);
