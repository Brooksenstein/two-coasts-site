import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ImageWrapper = styled.div`
  width: 100%;
  max-width: ${props => `${props.maxWidth}px`};
`;

const Image = ({ sizes, maxWidth, alt, ...other }) => (
  <ImageWrapper maxWidth={maxWidth} {...other}>
    <Img sizes={sizes} alt={alt} />
  </ImageWrapper>
);

export default Image;
