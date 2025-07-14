import React from 'react';

import Collection from '../organisms/collection';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

import { MainContainer, ContentWrapper } from '../styles/home';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { collection } = useParams();

  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        {/* <Banner /> */}
        <Collection collection={collection} />
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default React.memo(Home);
