import React from 'react';
import styled from 'styled-components';

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ArrowIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url('${({ theme }) => theme.urls.backArrow}');
`;

export const Typo = styled.div`
  font-size: 2rem;
`;

const BackArrowButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <BackButton onClick={onClick}>
      <ArrowIcon />
      <Typo>Back</Typo>
    </BackButton>
  );
};

export default React.memo(BackArrowButton);
