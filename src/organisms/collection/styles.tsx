import styled from 'styled-components';

import { Metropolis } from '../../styles/globalFont';

export const CollectionContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 8rem;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.maxWidth}) {
    width: calc(100% - 4rem);
    padding: 0 2rem;
  }
`;

export const TitleTypo = styled.div`
  width: 100%;
  font-size: 4.4rem;
  font-weight: bold;
  font-family: ${Metropolis} !important;
  margin-bottom: 4.6rem;
`;

export const CollectionTabList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid #ddd;
`;

export const CollectionTab = styled.div<{ isActive: boolean }>`
  padding: 2rem 3rem;
  font-size: 2.2rem;
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
  color: ${(props) => (props.isActive ? '#004df5' : '#999999')};
  border-bottom: 0.3rem solid ${(props) => (props.isActive ? '#004df5' : '#00000000')};
  cursor: pointer;
  @media only screen and (max-width: 650px) {
    font-size: 1.6rem;
    padding: 1rem 2rem;
  }
`;

export const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 3.8rem 0;
`;

export const TotalWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TotalLabel = styled.div`
  color: #707070;
`;

export const TotalNumber = styled.div`
  color: #0f0f0f;
  font-weight: bold;
`;

export const FilterWrapper = styled.div`
  color: #0f0f0f;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

export const MoreButton = styled.div`
  width: 12rem;
  height: 3.2rem;
  line-height: 3.2rem;
  text-align: center;
  border: 1px solid #777;
  border-radius: 0.4rem;
  cursor: pointer;
`;
