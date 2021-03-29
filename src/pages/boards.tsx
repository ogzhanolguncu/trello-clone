import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

import Navbar from '../components/navbar';

import StickyNavbar from '../components/stick-navbar';

const Boards = () => {
  useEffect(() => {
    document.title = 'Boards | Trello';
  }, []);

  return (
    <>
      <Navbar />
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        minHeight="calc(100vh - 40px)"
      >
        <StickyNavbar />
      </Flex>
    </>
  );
};

export default Boards;
