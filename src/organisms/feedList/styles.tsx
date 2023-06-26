import styled from 'styled-components';

export const FeedListContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeedItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeedAuthor = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 50rem) {
    padding: 1rem 1rem;
    width: calc(100% - 2rem);
  }
`;

export const ProfileIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url('${(props) => `${props.theme.urls.profileIcon}`}');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const AuthorTypo = styled.div``;

export const FeedImage = styled.div<{ src: string }>`
  width: 50rem;
  height: 50rem;
  background-color: gray;
  border-radius: 0.4rem;
  background-image: url('${({ src }) => src}');
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (max-width: 50rem) {
    width: calc(100vw - 1.5rem);
    height: calc(100vw - 1.5rem);
  }
`;

export const FeedInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 50rem) {
    width: calc(100% - 2rem);
  }
`;

export const TagList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0rem 1rem 0;

  & > div:nth-child(1) {
    background-color: #121417;
    color: white;
  }
  & > div:nth-child(2) {
    background-color: #edeff4;
    color: #404040;
  }
`;

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  padding: 0.4rem 0.8rem;
`;

export const NameTypo = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const DateTypo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 2rem;
`;

export const Divier = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #ededed;

  margin-top: 1rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 50rem) {
    width: calc(100% - 2rem);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
