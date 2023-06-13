import { useCallback, useState } from 'react';

import { useNFTsForFeatured, useInterval } from '../hooks';
import { convertTime, wait } from '../../../utils/common';
import { INFTStateProps } from '../index';

import {
  FeaturedContainer,
  NFTContainer,
  Box,
  ImageContainer,
  FeaturedBadgeImage,
  FeaturedImage,
  DescriptionContainer,
  DescriptionBox,
  Label,
  LabelText,
  NFTNameText,
  NFTInfoBox,
  InfoWrap,
  InfoText,
  InfoValueWrap,
  AvatarImage,
} from './styles';

import theme from '../../../themes';

interface IFeaturedItemProps {
  item: INFTStateProps;
  open: boolean;
}

const Featured = () => {
  const { NFTsList } = useNFTsForFeatured();

  const [openFeatured, setOpenFeatured] = useState<Array<boolean>>([true, false]);
  const [featuredIndex, setFeaturedIndex] = useState<number>(-1);
  const [featuredItem, setFeaturedItem] = useState<Array<INFTStateProps>>([]);

  useInterval(() => {
    if (NFTsList.length > 0) {
      handleFeaturedInfo();
    }
  }, 6000);

  const handleFeaturedInfo = () => {
    let index = featuredIndex + 1;
    if (index >= NFTsList.length) {
      index = 0;
    }
    let itemsList: Array<INFTStateProps> = featuredItem;
    let item: INFTStateProps = NFTsList[index];

    if (itemsList.length < 2) {
      itemsList.push(item);
      if (NFTsList.length > 2) {
        item = NFTsList[index];
        itemsList.push(item);
        index = index + 1;
      }
    } else {
      itemsList[openFeatured[0] ? 1 : 0] = item;
    }

    setFeaturedItem(itemsList);
    setFeaturedIndex(index);

    wait(1000).then(() => {
      setOpenFeatured([!openFeatured[0], !openFeatured[1]]);
    });
  };

  const FeaturedItem = useCallback(({ item, open }: IFeaturedItemProps) => {
    return (
      <NFTContainer open={open}>
        <Box>
          <ImageContainer>
            <FeaturedBadgeImage src={theme.urls.featuredLabel} alt={'Featured badge'} />
            <FeaturedImage src={item.image} alt={'Sample'} />
          </ImageContainer>
        </Box>
        <Box>
          <DescriptionContainer>
            <DescriptionBox>
              <Label>
                <LabelText>{`#${item.nftId}`}</LabelText>
              </Label>
              <NFTNameText>{item.name}</NFTNameText>
              <NFTInfoBox>
                <InfoWrap>
                  <InfoText color={'#707070'} flex={1}>
                    {'Created By'}
                  </InfoText>
                  <InfoValueWrap flex={4}>
                    <AvatarImage src={theme.urls.profileIcon2} alt={'Avatar'} />
                    <InfoText color={'#404040'} flex={1}>
                      {item.address}
                    </InfoText>
                  </InfoValueWrap>
                </InfoWrap>
                <InfoWrap>
                  <InfoText color={'#707070'} flex={1}>
                    {'Date'}
                  </InfoText>
                  <InfoText color={'#404040'} flex={4}>
                    {convertTime(item.timestamp)}
                  </InfoText>
                </InfoWrap>
              </NFTInfoBox>
            </DescriptionBox>
          </DescriptionContainer>
        </Box>
      </NFTContainer>
    );
  }, []);

  return (
    <FeaturedContainer>
      {featuredItem.length > 0 && <FeaturedItem item={featuredItem[0]} open={openFeatured[0]} />}
      {featuredItem.length > 1 && <FeaturedItem item={featuredItem[1]} open={openFeatured[1]} />}
    </FeaturedContainer>
  );
};

export default Featured;
