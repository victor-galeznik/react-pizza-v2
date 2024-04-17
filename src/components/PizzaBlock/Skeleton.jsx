import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={290}
    height={500}
    viewBox="0 0 290 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="147" cy="141" r="125" />
    <rect x="0" y="284" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="332" rx="10" ry="10" width="286" height="88" />
    <rect x="0" y="448" rx="10" ry="10" width="95" height="30" />
    <rect x="143" y="438" rx="20" ry="20" width="154" height="45" />
  </ContentLoader>
);

export default Skeleton;
