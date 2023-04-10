import React from 'react';

import Collection from '../organisms/collection';

import { ContentWrapper } from '../styles/home';

const Home = () => {
  return (
    <ContentWrapper>
      <Collection />
    </ContentWrapper>
  );
};

export default React.memo(Home);
