import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #0f0f0f;

  @media only screen and (max-width: 800px) {
    height: 19rem;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    width: calc(100% - 4rem);
    padding: 0 2rem;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #292929;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 0;
  }
`;
export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #808080;
  padding: 2.3rem 0;
`;

export const Logo = styled.div`
  width: 15.7rem;
  height: 3.8rem;
  background-image: url('${({ theme }) => theme.urls.footerNftLogo}');
  margin: 4rem 0;
`;

export const IconLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const IconLink = styled.div<{ src: string }>`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url('${(props) => `${props.theme.urls[props.src]}`}');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const TextLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const TextLink = styled.div`
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 1px;
  height: 85%;
  background-color: #666;
`;

export const AddressTypo = styled.div``;
