import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { HeaderContainer, HeaderWrapper, LogoImg, LinkWrapper, LinkItem, LinkName, LinkIcon } from './styles';
import styled from 'styled-components';
import { BsList } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';

export const MobileMenuWrapper = styled.div``;

export const MobileMenuList = styled.div<{ active: number }>`
  position: absolute;
  top: 6.8rem;
  left: 0;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 49;
  overflow: hidden;
  transition: max-height 0.1s ease-in-out;
  max-height: 0;

  ${({ active }) => active === 1 && `max-height: 100vh;`}
`;

export const MobileMenuItem = styled.div`
  width: calc(100% - 4rem);
  padding: 2rem;
  background-color: #1f1f1f;
  margin: 0;
  cursor: pointer;
  border-bottom: 1px solid #444;
  color: white;
  &:last-child {
    border-bottom: 0;
  }
`;

export const MobileMenuDim = styled.div<{ active: number }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 7rem;
  left: 0;
  background-color: #00000055;
  z-index: 48;
  ${({ active }) => (active === 1 ? 'display:flex' : 'display:none')}
`;

export const MenuIcon = styled(BsList)`
  font-size: 3rem;
  cursor: pointer;
  color: white;
`;

export const MenuCloseIcon = styled(RiCloseCircleLine)`
  font-size: 3rem;
  cursor: pointer;
  color: white;
`;

declare global {
  interface Document {
    mozFullScreenElement?: Element;
    webkitFullscreenElement?: Element;
    msFullscreenElement?: Element;
    mozCancelFullScreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
  }

  interface HTMLElement {
    mozRequestFullScreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }
}

const Header = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ maxWidth: 1000 });

  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const enterFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  };

  const onClickGallery = () => {
    enterFullscreen();
    navigate('/gallery');
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoImg onClick={() => navigate('/')} />
        {isSmallScreen ? (
          <MobileMenuWrapper>
            {isOpenMobile ? (
              <MenuCloseIcon onClick={() => setIsOpenMobile(false)} />
            ) : (
              <MenuIcon onClick={() => setIsOpenMobile(true)} />
            )}
            <MobileMenuList active={isOpenMobile ? 1 : 0}>
              <MobileMenuItem
                onClick={() => {
                  window.open(`${process.env.REACT_APP_EXPLORER_HOST}`);
                  setIsOpenMobile(false);
                }}
              >
                BLOCK EXPLORER
              </MobileMenuItem>
              <MobileMenuItem
                onClick={() => {
                  window.open(`${process.env.REACT_APP_STATION_HOST}`);
                  setIsOpenMobile(false);
                }}
              >
                FIRMA STATION
              </MobileMenuItem>
            </MobileMenuList>
            <MobileMenuDim active={isOpenMobile ? 1 : 0} onClick={() => setIsOpenMobile(false)} />
          </MobileMenuWrapper>
        ) : (
          <LinkWrapper>
            <LinkItem>
              <LinkName onClick={() => onClickGallery()}>FIRMA GALLERY</LinkName>
              <LinkIcon />
            </LinkItem>
            <LinkItem>
              <LinkName onClick={() => window.open(`${process.env.REACT_APP_EXPLORER_HOST}`)}>BLOCK EXPLORER</LinkName>
              <LinkIcon />
            </LinkItem>
            <LinkItem>
              <LinkName onClick={() => window.open(`${process.env.REACT_APP_STATION_HOST}`)}>FIRMA STATION</LinkName>
              <LinkIcon />
            </LinkItem>
          </LinkWrapper>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);
