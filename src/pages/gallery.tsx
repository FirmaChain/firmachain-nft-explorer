import React from 'react';

import GalleryView from '../organisms/galleryView';

import { ContentWrapper } from '../styles/gallery';
import GalleryHeader from '../organisms/galleryView/galleryHeader';

const Gallery = () => {
  return (
    <ContentWrapper>
      <GalleryHeader />
      <GalleryView />
    </ContentWrapper>
  );
};

export default React.memo(Gallery);
