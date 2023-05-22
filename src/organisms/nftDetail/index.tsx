import React, { useState } from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { useSnackbar } from 'notistack';

import { LoadingIcon } from '../nftCardList/styles';
import { useGetNftData, useLatestNftInfoByCollection } from './hook';
import { INftData } from '../collection/hooks';
import {
  convertDateFormat,
  convertFromNow,
  copyToClipboard,
  createTextEllipsis,
  getCollectionName,
} from '../../utils/common';

import {
  ContentWrapper,
  TopWrapper,
  NftImage,
  NftMainInfo,
  Top,
  TagList,
  Tag,
  ButtonList,
  ShareButton,
  ReportButton,
  Bottom,
  NftName,
  Timestamp,
  Description,
  Divider,
  ChainInfoList,
  ChainInfoItem,
  ChainInfoLabel,
  ChainInfoValue,
  ChainIcon,
  ProfileIcon,
  ChainTypo,
  NftOptionalInfo,
  OptionalWrapper,
  OptinalLabel,
  PropertiesWrapper,
  PropertyCard,
  PropertyName,
  PropertyValue,
  PropertyDescription,
  NftList,
  NftCardItem,
  NftCardImage,
  NftInfoWrapper,
  NftCardTopWrapper,
  NftId,
  NftCardTimestamp,
  MiddleWrapper,
  NftCardNftName,
  HistoryTable,
  HistoryHeader,
  HeaderList,
  HeaderItem,
  HistoryBody,
  BodyList,
  BodyItem,
  AddressWrapper,
  ProfileIconMini,
  AddressTypo,
  DateWrapper,
  TxLinkIcon,
  DateTypo,
  HistoryTypeTypo,
} from './styles';

const NftDetail = ({ dappId, nftId }: { dappId: string | undefined; nftId: string | undefined }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { nftData } = useGetNftData(dappId, nftId);
  const { targetNftList } = useLatestNftInfoByCollection({ currentCollection: dappId });

  const [isDragging, setIsDragging] = useState(false);

  const isSmall = useMediaQuery({ query: '(max-width: 1200px)' });
  const isTiny = useMediaQuery({ query: '(max-width: 800px)' });
  const isMicro = useMediaQuery({ query: '(max-width: 500px)' });

  const onClickNft = (targetNft: INftData) => {
    window.scrollTo({ top: 0 });
    window.location.href = `/nft/${targetNft.dappId}/${targetNft.nftId}`;
  };

  const ellipsisAddress = (address: string | undefined) => {
    let count = 0;
    if (isMicro) count = 2;
    else if (isTiny) count = 5;
    else if (isSmall) count = 10;

    return count > 0 ? createTextEllipsis(address, count, count) : address;
  };

  const ellipsisAddressFixed = (address: string | undefined, count = 10) => {
    return count > 0 ? createTextEllipsis(address, count, count) : address;
  };

  const copyShare = () => {
    copyToClipboard(window.location.href);
    enqueueSnackbar('Link Copied.', {
      variant: 'info',
      autoHideDuration: 2000,
    });
  };

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleMouseUp = (targetNft: any) => {
    if (isDragging === false) {
      onClickNft(targetNft);
    }
  };

  return (
    <ContentWrapper>
      <TopWrapper>
        <NftImage src={nftData.details?.imageURI} />
        <NftMainInfo>
          <Top>
            <TagList>
              <Tag isSpecial={true}>{getCollectionName(dappId)}</Tag>
              <Tag isSpecial={false}>#{nftId}</Tag>
            </TagList>
            <ButtonList>
              <ShareButton onClick={copyShare} />
              <ReportButton />
            </ButtonList>
          </Top>
          <Bottom>
            <NftName>{nftData?.details?.name} </NftName>
            <Timestamp>{convertFromNow(nftData?.details?.createdAt)}</Timestamp>
            <Description>{nftData?.details?.description}</Description>
            <Divider />
            <ChainInfoList>
              <ChainInfoItem>
                <ChainInfoLabel>Chain</ChainInfoLabel>
                <ChainInfoValue>
                  <ChainIcon />
                  <ChainTypo>FIRMACHAIN (Colosseum-1)</ChainTypo>
                </ChainInfoValue>
              </ChainInfoItem>

              <ChainInfoItem>
                <ChainInfoLabel>Created By</ChainInfoLabel>
                <ChainInfoValue>
                  {nftData?.details?.createdBy ? (
                    <>
                      <ProfileIcon />
                      <ChainTypo>{ellipsisAddressFixed(nftData?.details?.createdBy, 10)}</ChainTypo>
                    </>
                  ) : (
                    <LoadingIcon />
                  )}
                </ChainInfoValue>
              </ChainInfoItem>

              <ChainInfoItem>
                <ChainInfoLabel>Owned By</ChainInfoLabel>
                <ChainInfoValue>
                  <ProfileIcon />
                  <ChainTypo>{ellipsisAddressFixed(nftData?.details?.owner, 10)}</ChainTypo>
                </ChainInfoValue>
              </ChainInfoItem>
            </ChainInfoList>
            <Divider />
          </Bottom>
        </NftMainInfo>
      </TopWrapper>
      <NftOptionalInfo>
        <OptionalWrapper>
          <OptinalLabel>History</OptinalLabel>
          <HistoryTable>
            <HistoryHeader>
              <HeaderList>
                <HeaderItem>Type</HeaderItem>
                <HeaderItem>From</HeaderItem>
                <HeaderItem>To</HeaderItem>
                <HeaderItem>Date</HeaderItem>
              </HeaderList>
            </HistoryHeader>
            <HistoryBody>
              {nftData.details?.createdAt ? (
                <BodyList>
                  <BodyItem>
                    <HistoryTypeTypo>Created</HistoryTypeTypo>
                  </BodyItem>
                  <BodyItem>
                    <AddressWrapper>
                      <AddressTypo>-</AddressTypo>
                    </AddressWrapper>
                  </BodyItem>
                  <BodyItem>
                    <AddressWrapper>
                      <ProfileIconMini />
                      <AddressTypo>{ellipsisAddress(nftData.details?.createdBy)}</AddressTypo>
                    </AddressWrapper>
                  </BodyItem>
                  <BodyItem>
                    <DateWrapper>
                      <DateTypo>{convertDateFormat(nftData.details?.createdAt)}</DateTypo>
                      <TxLinkIcon
                        onClick={() =>
                          window.open(
                            `${process.env.REACT_APP_EXPLORER_HOST}/transactions/${nftData.details?.transactionHash}`
                          )
                        }
                      />
                    </DateWrapper>
                  </BodyItem>
                </BodyList>
              ) : (
                <></>
              )}
            </HistoryBody>
          </HistoryTable>
        </OptionalWrapper>
        {nftData.metadata?.attributes && (
          <OptionalWrapper>
            <OptinalLabel>Properties</OptinalLabel>
            <PropertiesWrapper>
              {nftData.metadata?.attributes.map((attribute, index) => (
                <PropertyCard key={index}>
                  <PropertyName>{attribute.key}</PropertyName>
                  <Divider />
                  <PropertyValue>{attribute.value}</PropertyValue>
                  <PropertyDescription>{attribute.description}</PropertyDescription>
                </PropertyCard>
              ))}
            </PropertiesWrapper>
          </OptionalWrapper>
        )}
        {targetNftList && (
          <OptionalWrapper>
            <OptinalLabel>NFTs in this collection</OptinalLabel>
            <NftList>
              <Slider
                arrows={false}
                dots={true}
                infinite={true}
                slidesToShow={5}
                slidesToScroll={5}
                speed={700}
                variableWidth={true}
                onSwipe={() => {}}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2,
                      dots: false,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots: false,
                    },
                  },
                ]}
              >
                {targetNftList.map((targetNft, index) => {
                  return (
                    <NftCardItem
                      key={index}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={() => handleMouseUp(targetNft)}
                    >
                      <NftCardImage src={targetNft.details?.imageURI} />
                      <NftInfoWrapper>
                        <NftCardTopWrapper>
                          <NftId>#{targetNft.nftId}</NftId>
                          <NftCardTimestamp>
                            {targetNft.details?.createdAt ? (
                              convertFromNow(targetNft.details.createdAt)
                            ) : (
                              <LoadingIcon />
                            )}
                          </NftCardTimestamp>
                        </NftCardTopWrapper>
                        <MiddleWrapper>
                          <NftCardNftName>{targetNft.details?.name}</NftCardNftName>
                        </MiddleWrapper>
                      </NftInfoWrapper>
                    </NftCardItem>
                  );
                })}
              </Slider>
            </NftList>
          </OptionalWrapper>
        )}
      </NftOptionalInfo>
    </ContentWrapper>
  );
};

export default React.memo(NftDetail);
