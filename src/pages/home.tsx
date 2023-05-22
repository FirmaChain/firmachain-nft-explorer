import React from 'react';

import Collection from '../organisms/collection';
// import Banner from '../organisms/banner';

import { ContentWrapper } from '../styles/home';

const Home = () => {
  return (
    <ContentWrapper>
      {/* <Banner /> */}
      <Collection />
    </ContentWrapper>
  );
};

export default React.memo(Home);
