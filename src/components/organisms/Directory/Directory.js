import MenuItem from 'components/molecules/MenuItem/MenuItem';
import { items } from 'data/items';
import React from 'react';
import { Wrapper } from './Directory.styles';

const Directory = () => {
  return (
    <Wrapper>
      {items.map((itemData) => (
        <MenuItem key={itemData.id} itemData={itemData} />
      ))}
    </Wrapper>
  );
};

export default Directory;
