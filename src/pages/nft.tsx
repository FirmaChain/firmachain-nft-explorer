import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import BackArrowButton from '../components/backArrowButton';
import NftDetail from '../organisms/nftDetail';

import { ContentWrapper, ContentContainer, TopMenu } from '../styles/nft';

const Nft = () => {
  const { dappId, nftId } = useParams();
  const navigate = useNavigate();

  return (
    <ContentWrapper>
      <ContentContainer>
        <TopMenu>
          <BackArrowButton onClick={() => navigate('/')} />
        </TopMenu>
        <NftDetail dappId={dappId} nftId={nftId} />
      </ContentContainer>
    </ContentWrapper>
  );
};

export default React.memo(Nft);
