import React, { useCallback, useMemo, useState } from 'react';
import { GridLoader } from 'react-spinners';
import ReactCardFlip from 'react-card-flip';

import { useInterval } from '../hooks';
import { convertFromNow, createTextEllipsisForEnd } from '../../../utils/common';
import { INFTStateProps } from '../index';

import theme from '../../../themes';
import {
  Conatainer,
  Box,
  ImageBox,
  ImageWrap,
  NFTLoadingBox,
  NFTLoadingWrap,
  LoadingDim,
  NFTNewLabelImage,
  NFTImage,
  NFTInfoBox,
  NFTInfoWrap,
  NFTIndexText,
  NFTNameText,
  NFTTimeText,
} from './styles';

interface INFTCardProps {
  index: number;
  nft: INFTStateProps;
  open: Array<number>;
}

interface IProps {
  NFTsGalleryList: INFTStateProps[];
}

const Gallery = ({ NFTsGalleryList }: IProps) => {
  const [openInfo, setOpenInfo] = useState<Array<number>>([0, 1]);

  const isNFTInLoading = useMemo(() => {
    return NFTsGalleryList.filter((nft: any) => nft.loading === true).length > 0;
  }, [NFTsGalleryList]);

  useInterval(() => handleNFTCover(), isNFTInLoading ? null : 6000);

  const handleNFTCover = () => {
    if (isNFTInLoading === false) {
      let length = NFTsGalleryList.length - 1;
      if (length > 0) {
        let randomArray = getRandIndex(length, 2);
        setOpenInfo(randomArray);
      }
    }
  };

  const getRandIndex = (size: number, selectingNumber: number) => {
    let randomIndexArray = [];
    let randomVerifyCount = 0;
    for (let i = 0; i < selectingNumber; i++) {
      let randomNum = Math.floor(Math.random() * size);
      if (NFTsGalleryList.length < 9) {
        randomIndexArray.push(randomNum);
      } else {
        if (
          randomVerifyCount >= 5 ||
          (randomIndexArray.indexOf(randomNum) === -1 &&
            randomNum !== openInfo[0] &&
            randomNum !== openInfo[1] &&
            NFTsGalleryList[randomNum].loading === false)
        ) {
          if (randomIndexArray.length > 0) {
            if (randomVerifyCount >= 5 || verifySameLine(randomIndexArray[0], randomNum)) {
              randomIndexArray.push(randomNum);
              randomVerifyCount = 0;
            } else {
              i--;
              randomVerifyCount = randomVerifyCount + 1;
            }
          } else {
            randomIndexArray.push(randomNum);
          }
        } else {
          i--;
          randomVerifyCount = randomVerifyCount + 1;
        }
      }
    }
    return randomIndexArray;
  };

  const verifySameLine = (oldNum: number, newNum: number) => {
    let oldLine = checkNumberLine(oldNum);
    let newLine = checkNumberLine(newNum);

    if (oldLine === newLine) return false;
    return checkPattern(oldNum, newNum);
  };

  const checkNumberLine = (number: number) => {
    if (number <= 2) return 1;
    if (number > 2 && number <= 5) return 2;
    if (number > 5) return 3;
  };

  const checkPattern = (oldNum: number, newNum: number) => {
    if (oldNum === newNum + 1 || oldNum === newNum + 3 || oldNum === newNum - 1 || oldNum === newNum - 3) return false;
    return true;
  };

  const NFTCard = useCallback(({ index, nft, open }: INFTCardProps) => {
    let firstInfo = open[0];
    let secondInfo = open[1];

    return (
      <ReactCardFlip isFlipped={false} flipDirection={'horizontal'} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
        <ImageBox>
          <ImageWrap>
            <NFTNewLabelImage open={nft.isNew} src={theme.urls.newLabel} alt={'New NFT'} />
            <NFTImage src={nft.image} alt={nft.name} />
            <NFTInfoBox open={index === firstInfo || index === secondInfo}>
              <NFTInfoWrap>
                <NFTIndexText>{`#${nft.nftId}`}</NFTIndexText>
                <NFTNameText>{createTextEllipsisForEnd(nft.name, 20)}</NFTNameText>
                <NFTTimeText>{convertFromNow(nft.timestamp)}</NFTTimeText>
              </NFTInfoWrap>
            </NFTInfoBox>
          </ImageWrap>
        </ImageBox>
        <NFTLoadingBox>
          <NFTLoadingWrap>
            <NFTImage src={nft.newImage} alt={nft.name} />
          </NFTLoadingWrap>
          <LoadingDim />
          <NFTLoadingWrap>
            <GridLoader color={'#ffffff'} />
          </NFTLoadingWrap>
        </NFTLoadingBox>
      </ReactCardFlip>
    );
  }, []);

  return (
    <Conatainer>
      <Box>
        {NFTsGalleryList.map((item: any, index: number) => {
          return <NFTCard key={index} index={index} nft={item} open={openInfo} />;
        })}
      </Box>
    </Conatainer>
  );
};

export default React.memo(Gallery);
