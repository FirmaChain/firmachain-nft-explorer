import styled, { keyframes } from 'styled-components';

import { Metropolis } from '../../styles/globalFont';

const dungdung = keyframes`
  0% {
    transform: translateY(0%);
  }
  50%{
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 50rem;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    display: none;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    flex-direction: column;
  }
`;

export const LeftWapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const RightWapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTypo = styled.div`
  text-align: left;
  font-size: 7.2rem;
  font-family: ${Metropolis} !important;
`;

export const SubTypo = styled.div`
  text-align: left;
  font-size: 7.2rem;
  font-weight: bold;
  font-family: ${Metropolis} !important;
`;

export const NftSticker = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 10rem);
  margin: 5rem 10rem;
`;

export const NftImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20%;
  width: 5rem;
  height: 5rem;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: ${dungdung};
  animation-iteration-count: infinite;
`;
