import React from 'react';
import Link from 'gatsby-link';

import Footer from '../components/Footer';
import Image from '../components/Image';
import Stretch from '../components/layout/Stretch';
import Flex from '../components/layout/Flex';

const Freakies = ({ data }) => (
  <Stretch>
    <Flex direction="column" justify="space-around" align="center">
      <Image maxWidth={100} sizes={data.freakiesImage.sizes} />
      <p>A drawing game!</p>
      <Footer />
    </Flex>
  </Stretch>
);

export const query = graphql`
  query FreakiesImageQuery {
    freakiesImage: imageSharp(id: { regex: "/freakies/" }) {
      sizes(maxWidth: 400) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default Freakies;
