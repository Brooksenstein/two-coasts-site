import React from 'react';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import Image from './Image';

const LinkImageWrapper = styled(Image)`
  cursor: pointer;
`;

const LinkImage = ({ href, ...other }) => (
  <LinkImageWrapper onClick={() => navigateTo(href)} {...other} />
);

export default LinkImage;
