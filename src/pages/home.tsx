import React from 'react';

import Collection from '../organisms/collection';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

import { MainContainer, ContentWrapper } from '../styles/home';

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        {/* <Banner /> */}
        <Collection />
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default React.memo(Home);
