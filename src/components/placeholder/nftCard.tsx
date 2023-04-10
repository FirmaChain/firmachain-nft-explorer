import React from 'react';
import ContentLoader from 'react-content-loader';

const NftCardPlaceholder = () => (
  <ContentLoader
    speed={2}
    width={284}
    height={425}
    viewBox='0 0 284 425'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='0' ry='0' width='284' height='284' />
    <rect x='0' y='300' rx='0' ry='0' width='60' height='24' />
    <rect x='224' y='300' rx='0' ry='0' width='60' height='24' />
    <rect x='0' y='340' rx='0' ry='0' width='160' height='32' />
    <rect x='0' y='387' rx='0' ry='0' width='284' height='30' />
  </ContentLoader>
);

export default React.memo(NftCardPlaceholder);
