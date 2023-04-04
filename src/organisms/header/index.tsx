import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderContainer, HeaderWrapper, LogoImg, LinkWrapper, LinkItem, LinkName, LinkIcon } from './styles';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoImg onClick={() => navigate('/')} />
        <LinkWrapper>
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
