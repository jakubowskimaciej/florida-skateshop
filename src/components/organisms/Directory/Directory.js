import React from 'react';
import { directories } from 'data/directories';
import DirectoryItem from 'components/molecules/DirectoryItem/DirectoryItem';
import { Wrapper } from './Directory.styles';

const Directory = () => {
  return (
    <Wrapper>
      {directories.map((itemData, { ...props }) => (
        <DirectoryItem key={itemData.id} itemData={itemData} {...props} />
      ))}
    </Wrapper>
  );
};

export default Directory;
