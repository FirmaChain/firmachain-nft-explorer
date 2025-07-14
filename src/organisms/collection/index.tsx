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

interface IProps {
  collection: string | undefined;
}

const Collection = ({ collection }: IProps) => {
  const [currentCollection, setCollection] = useState('');
  const [currentPage, setPage] = useState(0);
  const { nftByCollection, targetNftList } = useLatestNftInfo({ currentCollection, currentPage });

  useEffect(() => {
    setPage(0);
  }, []);

  useEffect(() => {
    if (collection === '1') {
      setCollection('d45211bf-717a-4065-9bfc-c7035b98da76');
    } else if (collection === '2') {
      setCollection('638a5786-9eba-454a-af87-0331653ca8cc');
    } else if (collection === '3') {
      setCollection('25578bc0-04eb-4df2-9d0b-8f367d701385');
    } else {
      setCollection('all');
    }
  }, [collection]);

  const onClickCollection = (dappId: string) => {
    setPage(() => 0);
    setCollection(dappId);
  };

  return (
    <CollectionContainer>
      <TitleTypo>Collection</TitleTypo>
      <CollectionTabList>
        {COLLECTION_LIST.map((collection, index) => (
          <CollectionTab key={index} isActive={currentCollection === collection.dappId} onClick={() => onClickCollection(collection.dappId)}>
            {collection.name}
          </CollectionTab>
        ))}
      </CollectionTabList>
      <ContentsContainer>
        <TopWrapper>
          <TotalWrapper>
            <TotalLabel>Total</TotalLabel>
            <TotalNumber>{nftByCollection[currentCollection] && nftByCollection[currentCollection].length}</TotalNumber>
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
