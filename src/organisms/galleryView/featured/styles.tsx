import styled, { keyframes } from 'styled-components';

const NFTInfoBoxKeyFrame = keyframes`
    0%{left: 100%}
    100%{left: 0}
`;

const NFTInfoBoxDefaultKeyFrame = keyframes`
    0%{left: 0}
    100%{left: -100%}
`;

export const FeaturedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: cneter;
  position: relative;
  background-color: #edeff4;
`;

export const NFTContainer = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${(props) => (props.open ? NFTInfoBoxKeyFrame : NFTInfoBoxDefaultKeyFrame)} 2s forwards;
`;

export const Box = styled.div`
  flex-glow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 647px;
  position: relative;
`;

export const FeaturedBadgeImage = styled.img`
  width: 20rem;
  height: 20.4rem;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: calc(100% - 0.1rem);
  object-fit: cover;
  object-position: 50% 50%;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 32.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const DescriptionBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 4.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Label = styled.div`
  padding: 0.3rem 1rem 0.4rem;
  border-radius: 0.4rem;
  background-color: #919aac;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelText = styled.div`
  font-family: Lato;
  font-size: 2.2rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.33px;
  color: #ffffff;
`;

export const NFTNameText = styled.div`
  font-size: 4.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.66px;
  text-align: left;
  color: #0f0f0f;
  padding: 1rem 0 2.4rem;
`;

export const NFTInfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InfoText = styled.div<{ color: string; flex: number }>`
  font-family: Lato;
  font-size: 2rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.2px;
  text-align: left;
  color: ${(props) => props.color};
  flex: ${(props) => props.flex};
`;

export const InfoValueWrap = styled.div<{ flex: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  flex: ${(props) => props.flex};
`;

export const AvatarImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
`;
