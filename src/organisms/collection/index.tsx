import React from 'react';

import { useLatestNftInfo } from './hooks';

import { CollectionContainer } from './styles';

const Collection = () => {
  return <CollectionContainer></CollectionContainer>;
};

export default React.memo(Collection);
