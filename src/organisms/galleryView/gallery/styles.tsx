import styled, { keyframes } from 'styled-components';

import { Metropolis } from '../../../styles/globalFont';

const NFTNewLabelKeyFrame = keyframes`
    0%{top: calc(-100% - 10rem); left: 20rem; opacity: 0; }
    14%{top: calc(-100% - 10rem); left: 20rem; opacity: 0; }
    30%{top: 0rem; left: -20rem; opacity: 1; }
    89%{top: 0rem; left: -20rem;  opacity: 1; }
    100%{top: 5rem; left: -25rem;  opacity: 0; }
`;

const NFTNewLabelDefaultKeyFrame = keyframes`
    0%{top: calc(-100% - 10rem); left: 20rem; opacity: 0; }
    100%{top: calc(-100% - 10rem); left: 20rem; opacity: 0; }
`;

const NFTInfoBoxKeyFrame = keyframes`
    0%{top: 100%}
    18%{top: 0}
    77%{top: 0}
    100%{top: 100%}
`;

const NFTInfoBoxDefaultKeyFrame = keyframes`
    0%{top: 100%}
    100%{top: 100%}
`;

export const Conatainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: #edeff4;
  z-index: 999;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem;
`;

export const ImageBox = styled.div`
  width: 31.3rem;
  height: 31.8rem;
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const NFTLoadingBox = styled.div`
  width: 31.3rem;
  height: 31.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const NFTLoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingDim = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1e1e1eef;
  backdrop-filter: blur(1rem);
  position: absolute;
`;

export const NFTNewLabelImage = styled.img<{ open: boolean }>`
  width: 50rem;
  height: 10rem;
  object-fit: contain;
  position: absolute;
  transform: rotate(-45deg);
  transition: all 1s;
  transition-timing-function: ease;
  animation: ${(props) => (props.open ? NFTNewLabelKeyFrame : NFTNewLabelDefaultKeyFrame)} 7s forwards;
`;

export const NFTImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const NFTInfoBox = styled.div<{ open: boolean }>`
  transition: margin-top 1s;
  transition-timing-function: ease;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  animation: ${(props) => (props.open ? NFTInfoBoxKeyFrame : NFTInfoBoxDefaultKeyFrame)} 5.5s forwards;
`;

export const NFTInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000000aa;
  gap: 3rem;
`;

export const NFTIndexText = styled.div`
  padding: 0 0.1rem 0.6rem;
  border-bottom: 0.2rem solid #ffffff;
  font-family: ${Metropolis};
  font-size: 1.8rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.27px;
  color: #ffffff;
`;

export const NFTNameText = styled.div`
  font-family: ${Metropolis};
  font-size: 2.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: center;
  word-break: break-word;
  color: #ffffff;
`;

export const NFTTimeText = styled.div`
  font-family: ${Metropolis};
  font-size: 1.4rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.21px;
  color: #ffffff;
`;
