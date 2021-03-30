import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import BoardHeaderSection from './board-header-section';
import BoardListSection from './board-list-section';

const BoardSection = () => {
  return (
    <Flex
      margin="40px 16px 0"
      width="100%"
      maxWidth="825px"
      minWidth="288px"
      position="sticky"
      top="0"
    >
      <Box padding="0 0 20px" maxWidth="1250px" width="100%">
        <BoardHeaderSection />
        <BoardListSection />
      </Box>
    </Flex>
  );
};

export default BoardSection;
