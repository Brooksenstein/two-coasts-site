import React from 'react';
import Link from 'gatsby-link';

import Flex from '../components/layout/Flex';
import FlexItem from '../components/layout/FlexItem';
import Center from '../components/layout/Center';

const Footer = () => (
  <Flex direction="row" justify="space-around" align="center">
    <FlexItem flex={1}>
      <Center>
        <Link to="/terms-of-service/">
          <small>Terms of Service</small>
        </Link>
      </Center>
    </FlexItem>
    <FlexItem flex={1}>
      <Center>
        <Link to="/privacy-policy/">
          <small>Privacy Policy</small>
        </Link>
      </Center>
    </FlexItem>
    <FlexItem flex={1}>
      <Center>
        <a href="mailto:jacobdfriedmann@gmail.com,mikebrooks92@gmail.com">
          <small>Support</small>
        </a>
      </Center>
    </FlexItem>
  </Flex>
);

export default Footer;
