import React from 'react';

import { INftData } from '../collection/hooks';

import {
  FeedListContainer,
  FeedItem,
  FeedAuthor,
  ProfileIcon,
  AuthorTypo,
  FeedImage,
  FeedInfo,
  TagList,
  TagItem,
  NameTypo,
  DateTypo,
  Divier,
  Wrapper,
} from './styles';
import { convertFromNow, createTextEllipsis } from '../../utils/common';

interface IProps {
  targetNftList: INftData[];
}

const FeedList = ({ targetNftList }: IProps) => {
  return (
    <FeedListContainer>
      {targetNftList.map((nft, index) => {
        return (
          <FeedItem key={index}>
            <FeedAuthor>
              <ProfileIcon></ProfileIcon>
              <AuthorTypo>{createTextEllipsis(nft.details.owner, 10, 10)}</AuthorTypo>
            </FeedAuthor>
            <FeedImage src={nft.details.imageURI} />
            <FeedInfo>
              <TagList>
                <TagItem>My first NFT!</TagItem>
                <TagItem>#{nft.nftId}</TagItem>
              </TagList>
              <Wrapper>
                <NameTypo>{nft.details.name}</NameTypo>
                <DateTypo>{convertFromNow(nft.details.createdAt)}</DateTypo>
              </Wrapper>
            </FeedInfo>
            <Divier />
          </FeedItem>
        );
      })}
    </FeedListContainer>
  );
};

export default React.memo(FeedList);
