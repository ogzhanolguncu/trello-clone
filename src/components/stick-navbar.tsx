import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FaTrello } from 'react-icons/fa';
import { IoIosPulse } from 'react-icons/io';
import { RiTrelloLine } from 'react-icons/ri';

import StickyNavbarLink from './sticky-navbar-link';

import * as ROUTES from '../constants/routes';

const StickyNavbar = () => {
  return (
    <Box position="sticky" top="0">
      <Box margin="40px 0 0" padding="0 16px" width="280px" as="nav">
        <Flex flexDirection="column">
          <StickyNavbarLink text="Boards" route={ROUTES.BOARDS} icon={FaTrello} />
          <StickyNavbarLink text="Templates" route={ROUTES.TEMPLATES} icon={RiTrelloLine} />
          <StickyNavbarLink text="Home" route={ROUTES.HOME} icon={IoIosPulse} />
        </Flex>
      </Box>
    </Box>
  );
};

export default StickyNavbar;
