import styled from 'styled-components';

import { Metropolis } from '../../styles/globalFont';

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NftImage = styled.img`
  width: 44rem;
  height: auto;
  background-color: #ccc;
  border-radius: 1rem;
  @media only screen and (min-width: ${({ theme }) => theme.sizes.maxWidth}) {
    flex-shrink: 0;
  }

  @media only screen and (max-width: 800px) {
    width: calc(100% + 4rem);
    max-width: calc(100% + 4rem);
    border-radius: 0;
  }
`;

export const NftMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.maxWidth}) {
    flex-grow: 1;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TagList = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const Tag = styled.div<{ isSpecial: boolean }>`
  display: flex;
  ${(props) =>
    props.isSpecial ? 'background-color: #121417;color: white;' : 'background-color: #edeff4;color: #404040;'}
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  border-radius: 4px;
`;

export const ButtonList = styled.div`
  flex-shrink: 0;
  width: 9rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ShareButton = styled.div`
  width: 4rem;
  height: 4rem;
  background-image: url('${(props) => `${props.theme.urls.shareBox}`}');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const ReportButton = styled.div`
  width: 4rem;
  height: 4rem;
  background-image: url('${(props) => `${props.theme.urls.reportBox}`}');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Bottom = styled.div`
  width: 100%;
  disaply: flex;
  flex-direction: column;
`;

export const NftName = styled.div`
  color: #0f0f0f;
  font-size: 4.2rem;
  font-weight: bold;
  font-family: ${Metropolis} !important;
`;

export const Timestamp = styled.div`
  color: #999999;
  font-size: 1.8rem;
  margin: 2.4rem 0 2.6rem 0;
`;

export const Description = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  color: #404040;
  font-size: 1.6rem;
  line-height: 1.3;
  margin-bottom: 4rem;
  @media only screen and (min-width: ${({ theme }) => theme.sizes.maxWidth}) {
    height: 6rem;
    max-height: 6rem;
    overflow: hidden;
    vertical-align: top;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

export const Divider = styled.div`
  background-color: #dddddd;
  width: 100%;
  height: 0.1rem;
`;

export const ChainInfoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2.3rem 0;
`;

export const ChainInfoItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChainInfoLabel = styled.div`
  display: flex;
  font-size: 1.6rem;
  color: #707070;
`;

export const ChainInfoValue = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ChainIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('${(props) => `${props.theme.urls.firmaCircle}`}');
  background-size: contain;
  background-repeat: no-repeat;
`;
export const ProfileIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('${(props) => `${props.theme.urls.profileIcon}`}');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ChainTypo = styled.div`
  color: #404040;
  font-size: 1.6rem;
`;

export const NftOptionalInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
`;

export const OptionalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 6rem 0 2rem 0;
`;
export const OptinalLabel = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

export const PropertiesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

export const PropertyCard = styled.div`
  flex: 1;
  border: 1px solid #dddddd;
  border-radius: 0.8rem;
  padding: 1.6rem 2rem;
  text-align: center;
  min-width: calc(26rem - 4rem);
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    min-width: calc(50% - 6rem);
  }
`;

export const PropertyName = styled.div`
  font-size: 1.6rem;
  color: #404040;
  margin-bottom: 1.4rem;
`;

export const PropertyValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1.4rem;
  margin-bottom: 1rem;
`;

export const PropertyDescription = styled.div`
  font-size: 1.4rem;
  color: #707070;
`;

export const NftList = styled.div`
  width: 100%;
  & > div {
    height: 32rem !important;
  }
`;

export const NftCardItem = styled.div`
  width: 22.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
  margin-right: 3rem;
  @media only screen and (max-width: 650px) {
    width: 50%;
    margin-right: 2rem;
  }
`;

export const NftCardImage = styled.div<{ src: string | undefined }>`
  width: 22.4rem;
  height: 22.4rem;
  border-radius: 1rem;
  background-color: gray;
  background-image: url('${(props) => props.src && props.src}');
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (max-width: 650px) {
    width: calc(100% - 2rem);
  }
`;

export const NftInfoWrapper = styled.div`
  width: 22.4rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const NftCardTopWrapper = styled.div`
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

export const NftCardTimestamp = styled.div`
  line-height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  font-size: 1.4rem;
  color: #999;
`;

export const MiddleWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
`;

export const NftCardNftName = styled.div`
  font-weight: bold;
  color: #0f0f0f;
  font-size: 1.6rem;
`;

export const HistoryTable = styled.table`
  width: 100%;
`;

export const HistoryHeader = styled.thead`
  width: 100%;
`;

export const HeaderList = styled.tr`
  width: 100%;
`;

export const HeaderItem = styled.th`
  flex-grow: 1;
  background-color: #f4f4f4;
  padding: 0.7rem 1.5rem;
  font-size: 1.4rem;
  color: #707070;
  text-align: left;
`;

export const HistoryBody = styled.tbody`
  width: 100%;
`;

export const BodyList = styled.tr`
  width: 100%;
`;

export const BodyItem = styled.td`
  padding: 1.4rem 1.5rem;
  font-size: 1.4rem;
  color: #707070;
  vertical-align: top;
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    width: 40%;
  }
  &:nth-child(3) {
    width: 40%;
  }
  &:nth-child(4) {
    width: 10%;
  }
`;

export const AddressWrapper = styled.div`
  height: 2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProfileIconMini = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url('${(props) => `${props.theme.urls.profileIcon}`}');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const AddressTypo = styled.div`
  height: 2rem;
  line-height: 2rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TxLinkIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url('${(props) => `${props.theme.urls.linkTx}`}');
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: -0.05rem;
  cursor: pointer;
`;

export const DateTypo = styled.div`
  height: 2rem;
  line-height: 2rem;
`;

export const HistoryTypeTypo = styled.div`
  color: #0f0f0f;
  font-weight: bold;
  height: 2rem;
  line-height: 2rem;
`;
