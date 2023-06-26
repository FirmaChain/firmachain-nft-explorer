import React, { useEffect, useState } from 'react';

import { MainContainer, ContentWrapper } from '../styles/feeds';
import { useLatestNftInfo } from '../organisms/collection/hooks';
import Header from '../organisms/header';
import FeedList from '../organisms/feedList';

const Feeds = () => {
  const currentCollection = 'all';
  const [currentPage, setPage] = useState(0);
  const { targetNftList } = useLatestNftInfo({ currentCollection, currentPage });

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const scrolledToBottom = Math.ceil(((scrollTop + clientHeight) / scrollHeight) * 100) >= 80;

      if (scrolledToBottom) {
        moreAction();
      }
    };

    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  const moreAction = () => {
    setPage(currentPage + 1);
  };

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <FeedList targetNftList={targetNftList} />
      </ContentWrapper>
    </MainContainer>
  );
};

export default React.memo(Feeds);
