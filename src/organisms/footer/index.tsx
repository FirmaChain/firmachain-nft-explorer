import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  FooterContainer,
  FooterWrapper,
  TopWrapper,
  BottomWrapper,
  Logo,
  IconLinkWrapper,
  IconLink,
  TextLinkWrapper,
  TextLink,
  Divider,
  AddressTypo,
} from './styles';

const Footer = () => {
  const isSmall = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <FooterContainer>
      <FooterWrapper>
        <TopWrapper>
          <Logo />
          <IconLinkWrapper>
            <IconLink src={'medium'} onClick={() => window.open('https://medium.com/firmachain')} />
            <IconLink src={'twitter'} onClick={() => window.open('https://twitter.com/firmachain')} />
            <IconLink src={'reddit'} onClick={() => window.open('https://www.reddit.com/r/FIRMACHAIN_network/')} />
            <IconLink src={'telegram'} onClick={() => window.open('https://t.me/firmachain_global')} />
          </IconLinkWrapper>
        </TopWrapper>
        {isSmall ? (
          <BottomWrapper></BottomWrapper>
        ) : (
          <BottomWrapper>
            <TextLinkWrapper>
              <TextLink>info@firmachain.org</TextLink>
              <Divider />
              <TextLink>Privacy Policy</TextLink>
            </TextLinkWrapper>
            <AddressTypo>ⓒ FirmaChain Pte. Ltd. | All Right Reserved. 71 Robinson Road, Singapore, 068895</AddressTypo>
          </BottomWrapper>
        )}
      </FooterWrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer);
