import React from 'react';

import Image from '../components/Image';
import LinkImage from '../components/LinkImage';
import Footer from '../components/Footer';
import Flex from '../components/layout/Flex';
import Stretch from '../components/layout/Stretch';

const IndexPage = ({ data }) => (
  <Stretch>
    <Flex direction="column" justify="space-around" align="center">
      <Image maxWidth={400} sizes={data.logoImage.sizes} />
      <h1>We Make Games</h1>
      <Flex direction="row" justify="space-around" align="center">
        <LinkImage
          maxWidth={100}
          sizes={data.freakiesImage.sizes}
          href="/freakies/"
        />
      </Flex>
      <Footer />
    </Flex>
  </Stretch>
);

export const query = graphql`
  query LogoImageQuery {
    logoImage: imageSharp(id: { regex: "/logo/" }) {
      sizes(maxWidth: 400) {
        ...GatsbyImageSharpSizes
      }
    }

    freakiesImage: imageSharp(id: { regex: "/freakies/" }) {
      sizes(maxWidth: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default IndexPage;
