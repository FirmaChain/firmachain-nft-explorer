import React, { useEffect, useRef, useState } from 'react';

import { HeaderContainer, HeaderWrapper, LogoImg } from './styles';

import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';

const SearchBarWarpper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const BackButton = styled(IoIosArrowBack)`
  font-size: 3rem;
  color: white;
`;

const SearchTextInput = styled.input`
  width: 100%;
  background: transparent;
  height: 5rem;
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  color: white;
  font-size: 1.6rem;
`;

const SearchButton = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  font-size: 2.4rem;
  font-weight: 600;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: #ddd;
`;

interface IProps {
  searchId: string;
  setSearchId: (is: string) => void;
}

const FeedHeader = ({ searchId, setSearchId }: IProps) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<any>(null);

  const handleInputChange = (event: any) => {
    setSearchId(event.target.value);
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onClickOpenSearch = () => {
    setActive(true);
  };

  const onClickCloseSearch = () => {
    setActive(false);
    setSearchId('');
  };

  useEffect(() => {
    if (active) focusInput();
  }, [active]);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        {active ? (
          <SearchBarWarpper>
            <BackButton onClick={() => onClickCloseSearch()} />
            <SearchTextInput ref={inputRef} placeholder=' Input NFT ID' value={searchId} onChange={handleInputChange} />
          </SearchBarWarpper>
        ) : (
          <>
            <LogoImg
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
              }
            />

            <SearchButton onClick={() => onClickOpenSearch()}>
              <HiSearch />
            </SearchButton>
          </>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default React.memo(FeedHeader);
