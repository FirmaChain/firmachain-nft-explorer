import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderContainer, HeaderWrapper, LogoImg, LinkWrapper, LinkItem, LinkName, LinkIcon } from './styles';

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
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);
