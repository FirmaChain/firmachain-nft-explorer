import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 5rem;
  position: sticky;
  top: 5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
