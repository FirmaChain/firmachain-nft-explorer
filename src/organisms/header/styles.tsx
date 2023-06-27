import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  position: sticky;
  top: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e1e1e;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    width: calc(100% - 4rem);
    padding: 0 2rem;
  }
`;

export const LogoImg = styled.div`
  width: 19.7rem;
  height: 3.8rem;
  background-image: url('${({ theme }) => theme.urls.nftLogo}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const LinkItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LinkName = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.topLink};
`;

export const LinkIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('${({ theme }) => theme.urls.link}');
`;
