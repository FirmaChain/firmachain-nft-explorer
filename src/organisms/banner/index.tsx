import React, { useState, useEffect } from 'react';

import { bannerPattern } from '../../constants/banner';

import {
  BannerContainer,
  BannerWrapper,
  LeftWapper,
  RightWapper,
  MainTypo,
  SubTypo,
  NftSticker,
  NftImage,
} from './styles';

const Banner = () => {
  const banner = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [dummy, setDummy] = useState<number[][]>([]);

  useEffect(() => {
    const randomBanner = Math.floor(Math.random() * bannerPattern.length);
    setDummy(bannerPattern[randomBanner]);
  }, []);

  return (
    <BannerContainer>
      <BannerWrapper>
        <LeftWapper>
          <MainTypo>CHECK THE NFT</MainTypo>
          <SubTypo>OF FIRMACHAIN</SubTypo>
        </LeftWapper>
        <RightWapper>
          <NftSticker>
            {dummy.length &&
              banner.map((v, index) => {
                return (
                  <NftImage
                    key={index}
                    src={`/images/dummy/a${v}.png`}
                    style={{
                      animationDelay: `0.${v * 4}s`,
                      marginLeft: `${dummy[index][0]}%`,
                      marginTop: `${dummy[index][1]}%`,
                    }}
                  />
                );
              })}
          </NftSticker>
        </RightWapper>
      </BannerWrapper>
    </BannerContainer>
  );
};

export default React.memo(Banner);
