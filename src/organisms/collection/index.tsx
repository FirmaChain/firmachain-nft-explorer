import React, { useState, useEffect } from 'react';

import NftCardList from '../nftCardList';

import { useLatestNftInfo } from './hooks';
import { COLLECTION_LIST } from '../../config';

import {
  CollectionContainer,
  TitleTypo,
  CollectionTabList,
  CollectionTab,
  ContentsContainer,
  TopWrapper,
  TotalWrapper,
  TotalLabel,
  TotalNumber,
  FilterWrapper,
  ButtonWrapper,
  MoreButton,
} from './styles';

const Collection = () => {
  const [currentCollection, setCollection] = useState('all');
  const [currentPage, setPage] = useState(0);
  const { nftByCollection, targetNftList } = useLatestNftInfo({ currentCollection, currentPage });

  useEffect(() => {
    setPage(0);
  }, []);

  const onClickCollection = (dappId: string) => {
    setCollection(dappId);
  };

  return (
    <CollectionContainer>
      <TitleTypo>Collection</TitleTypo>
      <CollectionTabList>
        {COLLECTION_LIST.map((collection, index) => (
          <CollectionTab
            key={index}
            isActive={currentCollection === collection.dappId}
            onClick={() => onClickCollection(collection.dappId)}
          >
            {collection.name}
          </CollectionTab>
        ))}
      </CollectionTabList>
      <ContentsContainer>
        <TopWrapper>
          <TotalWrapper>
            <TotalLabel>Total</TotalLabel>
            <TotalNumber>{nftByCollection[currentCollection].length}</TotalNumber>
          </TotalWrapper>
          <FilterWrapper>Recently Created</FilterWrapper>
        </TopWrapper>
        <NftCardList targetNftList={targetNftList} />
        <ButtonWrapper>
          <MoreButton onClick={() => setPage(currentPage + 1)}>More</MoreButton>
        </ButtonWrapper>
      </ContentsContainer>
    </CollectionContainer>
  );
};

export default React.memo(Collection);
