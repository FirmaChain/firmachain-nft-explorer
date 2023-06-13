import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from '../organisms/header';
import Footer from '../organisms/footer';
import BackArrowButton from '../components/backArrowButton';
import NftDetail from '../organisms/nftDetail';

import { MainContainer, ContentWrapper, ContentContainer, TopMenu } from '../styles/nft';

const Nft = () => {
  const { dappId, nftId } = useParams();
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <ContentContainer>
          <TopMenu>
            <BackArrowButton onClick={() => navigate('/')} />
          </TopMenu>
          <NftDetail dappId={dappId} nftId={nftId} />
        </ContentContainer>
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default React.memo(Nft);
