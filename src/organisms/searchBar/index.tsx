import React, { useState, useRef, useEffect } from 'react';
import { TbSearch } from 'react-icons/tb';
import { IoIosArrowBack } from 'react-icons/io';

import styled from 'styled-components';

const SearchBarContainer = styled.div`
  width: calc(100%);
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchButton = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #aaa;
  border-radius: 0.4rem;
  font-size: 1.8rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const SearchBarWarpper = styled.div`
  width: 100%;
  padding: 0 1rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled(IoIosArrowBack)`
  font-size: 3rem;
`;

const SearchTextInput = styled.input`
  width: 100%;
  height: 5rem;
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
`;

interface IProps {
  searchId: string;
  setSearchId: (is: string) => void;
}

const SearchBar = ({ searchId, setSearchId }: IProps) => {
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
    <SearchBarContainer>
      {active ? (
        <SearchBarWarpper>
          <BackButton onClick={() => onClickCloseSearch()} />
          <SearchTextInput
            type={'number'}
            ref={inputRef}
            placeholder='Input NFT ID'
            value={searchId}
            onChange={handleInputChange}
          />
        </SearchBarWarpper>
      ) : (
        <SearchButton onClick={() => onClickOpenSearch()}>
          <TbSearch />
        </SearchButton>
      )}
    </SearchBarContainer>
  );
};

export default React.memo(SearchBar);
