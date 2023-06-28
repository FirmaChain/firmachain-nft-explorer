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
  width: 20.4rem;
  height: 3.8rem;
  background-image: url('${({ theme }) => theme.urls.galleryLogo}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;
