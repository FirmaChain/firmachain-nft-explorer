import React from 'react';

import Gallery from './gallery';
import Featured from './featured';

import { Container, OuterBox } from './styles';

export interface INFTStateProps {
  nftId: number;
  name: string;
  address: string;
  timestamp: string;
  newImage: string;
  image: string;
  loading: boolean;
  isNew: boolean;
}

const GalleryMode = () => {
  return (
    <Container>
      <OuterBox style={{ width: 'calc(100vw)' }}>
        <Featured />
      </OuterBox>
      <OuterBox style={{ width: 'calc(100vw)' }}>
        <Gallery />
      </OuterBox>
    </Container>
  );
};

export default React.memo(GalleryMode);
