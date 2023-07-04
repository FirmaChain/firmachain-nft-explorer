import React from 'react';
import { useNavigate } from 'react-router-dom';

import { convertFromNow, createTextEllipsis } from '../../utils/common';

import { INftData } from '../collection/hooks';
import { NftCardPlaceholder } from '../../components/placeholder';

import {
  NftCardContainer,
  NftCardWrapper,
  NftCardItem,
  NftImage,
  NftInfoWrapper,
  TopWrapper,
  NftId,
  Timestamp,
  MiddleWrapper,
  NftName,
  BottomWrapper,
  LabelTypo,
  ValueTypo,
  LoadingIcon,
} from './styles';

interface IProps {
  targetNftList: INftData[];
}

const NftCardList = ({ targetNftList }: IProps) => {
  const navigate = useNavigate();

  const onClickNft = (targetNft: INftData) => {
    navigate(`/nft/${targetNft.dappId}/${targetNft.nftId}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <NftCardContainer>
      <NftCardWrapper>
        {targetNftList.map((targetNft, index) => {
          if (targetNft.details === null) {
            return <NftCardPlaceholder key={index} />;
          } else {
            return (
              <NftCardItem key={index}>
                <NftImage src={targetNft.details.imageURI} onClick={() => onClickNft(targetNft)} />
                <NftInfoWrapper>
                  <TopWrapper onClick={() => onClickNft(targetNft)}>
                    <NftId>#{targetNft.nftId}</NftId>
                    <Timestamp>
                      {targetNft.details.createdAt ? convertFromNow(targetNft.details.createdAt) : <LoadingIcon />}
                    </Timestamp>
                  </TopWrapper>
                  <MiddleWrapper onClick={() => onClickNft(targetNft)}>
                    <NftName>{targetNft.details.name}</NftName>
                  </MiddleWrapper>
                  <BottomWrapper>
                    <LabelTypo>Owner</LabelTypo>
                    <ValueTypo
                      onClick={() =>
                        window.open(`${process.env.REACT_APP_EXPLORER_HOST}/accounts/${targetNft.details.owner}`)
                      }
                    >
                      {createTextEllipsis(targetNft.details.owner, 5, 4)}
                    </ValueTypo>
                  </BottomWrapper>
                </NftInfoWrapper>
              </NftCardItem>
            );
          }
        })}
      </NftCardWrapper>
    </NftCardContainer>
  );
};

export default React.memo(NftCardList);
