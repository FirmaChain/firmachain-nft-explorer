import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    width: calc(100% - 4rem);
    padding: 0 2rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  flex-direction: column;
`;

export const TopMenu = styled.div`
  width: 100%;
  display: flex;
  margin: 4rem 0;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
