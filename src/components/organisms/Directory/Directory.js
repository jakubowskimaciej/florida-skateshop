import React from 'react';
import DirectoryItem from 'components/molecules/DirectoryItem/DirectoryItem';
import { Wrapper } from './Directory.styles';

import { useSelector } from 'react-redux';

const Directory = () => {
  const directories = useSelector((state) => state.directory);

  return (
    <Wrapper>
      {directories.map((itemData, { ...props }) => (
        <DirectoryItem key={itemData.id} itemData={itemData} {...props} />
      ))}
    </Wrapper>
  );
};

export default Directory;
