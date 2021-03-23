import React from 'react';

const SvgIcon = ({ src, width, height }) => (
  <img src={`/img/svg/${src}`} alt={src} with={width} height={height} />
);

export default SvgIcon;
