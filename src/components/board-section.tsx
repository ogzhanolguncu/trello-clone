import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { WiTime4 } from 'react-icons/wi';
import { TiStarOutline } from 'react-icons/ti';

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
        <BoardHeaderSection text="Starred boards" icon={TiStarOutline} />
        <BoardListSection />
        <BoardHeaderSection text="Recently viewed" icon={WiTime4} />
        <BoardListSection />
      </Box>
    </Flex>
  );
};

export default BoardSection;
