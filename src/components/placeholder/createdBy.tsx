import React from 'react';
import ContentLoader from 'react-content-loader';

const CreatedByPlaceholder = ({ isSmall }: { isSmall: boolean }) => (
  <ContentLoader
    speed={2}
    width={isSmall ? 150 : 300}
    height={24}
    viewBox={`0 0 ${isSmall ? 150 : 300} 24`}
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='0' ry='0' width={isSmall ? 150 : 300} height='24' />
  </ContentLoader>
);

export default React.memo(CreatedByPlaceholder);
