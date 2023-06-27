import React, { useDeferredValue, useEffect, useState } from 'react';

import { MainContainer, ContentWrapper } from '../styles/feeds';
import { useLatestNftInfo } from '../organisms/collection/hooks';

import FeedList from '../organisms/feedList';
import FeedHeader from '../organisms/feedHeader';

const Feeds = () => {
  const currentCollection = 'all';
  const [currentPage, setPage] = useState(0);
  const [searchId, setSearchId] = useState('');
  const deferredSearchId = useDeferredValue(searchId);

  const { targetNftList, searchNftList } = useLatestNftInfo({
    currentCollection,
    currentPage,
    deferredSearchId,
    term: 10,
  });

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
    if (searchNftList.length === 0) setPage(currentPage + 1);
  };

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <MainContainer>
      <FeedHeader searchId={searchId} setSearchId={setSearchId} />
      <ContentWrapper>
        {searchId !== '' && searchNftList.length === 0 ? (
          <></>
        ) : (
          <FeedList targetNftList={searchNftList.length > 0 ? searchNftList : targetNftList} />
        )}
      </ContentWrapper>
    </MainContainer>
  );
};

export default React.memo(Feeds);
