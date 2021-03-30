import React from 'react';
import { Flex } from '@chakra-ui/react';

import StickyNavbar from './stick-navbar';

type MainContainer = {
  children?: React.ReactNode;
};

const MainContainer = ({ children }: MainContainer) => {
  return (
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="center"
      minHeight="calc(100vh - 40px)"
      backgroundColor="#FAFBFC"
    >
      <StickyNavbar />
      {children}
    </Flex>
  );
};

export default MainContainer;
