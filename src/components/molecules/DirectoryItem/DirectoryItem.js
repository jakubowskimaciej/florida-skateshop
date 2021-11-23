import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyledMenuItem, ImageWrapper } from './DirectoryItem.styles';
import ContentWrapper from 'components/atoms/ContentWrapper/ContentWrapper';

const DirectoryItem = ({
  itemData: { title, imageUrl, linkUrl },
  history,
  match,
}) => {
  return (
    <StyledMenuItem
      onClick={() => history.push(`${match.url}collection/${linkUrl}`)}
    >
      <ImageWrapper image={imageUrl} />
      <ContentWrapper title={title} />
    </StyledMenuItem>
  );
};

export default withRouter(DirectoryItem);
