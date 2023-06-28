import React, { useEffect, useState } from 'react';
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

const FullButton = styled.div`
  color: #eee;
  font-size: 2rem;
  border: 1px solid #3063d4;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin-left: 2rem;
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 160px;
  background-color: #3063d4;
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
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const checkFullscreen = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', checkFullscreen);

    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen);
    };
  }, []);

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

  const onClickClose = () => {
    exitFullscreen();
    navigate('/');
  };

  return (
    <Container>
      <Box>
        <LogoImage src={theme.urls.galleryLogo} alt={'FIRMACHAIN IN BWB 2022 GALLERY'} />
        {isFullscreen === false && <FullButton onClick={() => enterFullscreen()}>FULLSCREEN</FullButton>}
        <ExitButton onClick={() => onClickClose()}>CLOSE</ExitButton>
      </Box>
    </Container>
  );
};

export default React.memo(Header);
