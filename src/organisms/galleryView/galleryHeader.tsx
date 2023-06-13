import React from 'react';
import styled from 'styled-components';
import theme from '../../themes';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 10.5rem;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  z-index: 999;
`;

const Box = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 4.5rem;
`;

const LogoImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

const ExitButton = styled.div`
  color: white;
  font-size: 2rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin-left: 2rem;
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 35px;
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

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  };

  const onClickClose = () => {
    exitFullscreen();
    navigate('/');
  };

  return (
    <Container>
      <Box>
        <LogoImage src={theme.urls.galleryLogo} alt={'FIRMACHAIN IN BWB 2022 GALLERY'} />
        <ExitButton onClick={() => onClickClose()}>CLOSE</ExitButton>
      </Box>
    </Container>
  );
};

export default React.memo(Header);
