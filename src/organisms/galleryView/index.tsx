import React, { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';

import Gallery from './gallery';
import Featured from './featured';

import { Container, OuterBox } from './styles';
import { useNFTsForFeatured, useNFTsForGallery } from './hooks';

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
  const { NFTsList } = useNFTsForFeatured();
  const { NFTsGalleryList } = useNFTsForGallery();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container>
      {loading ? (
        <GridLoader color={'#888'} />
      ) : (
        <>
          <OuterBox style={{ width: 'calc(100vw)' }}>
            <Featured NFTsList={NFTsList} />
          </OuterBox>
          <OuterBox style={{ width: 'calc(100vw)' }}>
            <Gallery NFTsGalleryList={NFTsGalleryList} />
          </OuterBox>{' '}
        </>
      )}
    </Container>
  );
};

export default React.memo(GalleryMode);
