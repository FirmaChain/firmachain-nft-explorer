import styled from 'styled-components';

export const NftCardContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
`;

export const NftCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 9rem 3rem;
  @media only screen and (max-width: 650px) {
    gap: 3rem;
  }
`;

export const NftCardItem = styled.div`
  width: 28.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
  @media only screen and (max-width: 650px) {
    width: calc(50% - 1.5rem);
  }
`;

export const NftImage = styled.img`
  width: 28.4rem;
  border-radius: 1rem;
  @media only screen and (max-width: 650px) {
    width: calc(100%);
  }
`;

export const NftInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NftId = styled.div`
  padding: 0.4rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  color: #404040;
  background-color: #edeff4;
`;

export const Timestamp = styled.div`
  line-height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  font-size: 1.4rem;
  color: #999;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    font-size: 1.2rem;
  }
`;

export const MiddleWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #efefef;
  padding: 1.5rem 0;
`;

export const NftName = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

export const LabelTypo = styled.div`
  font-size: 1.6rem;
  color: #707070;
`;

export const ValueTypo = styled.div`
  font-size: 1.6rem;
  color: #0f0f0f;
`;

export const LoadingIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url('${({ theme }) => theme.urls.loading}');
  background-size: contain;
  opacity: 0.3;
`;
