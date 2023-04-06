import styled from 'styled-components';

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
