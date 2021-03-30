import React from 'react';
import { Flex } from '@chakra-ui/react';

import BoardListSectionItem from './board-list-section-item';

const BoardListSection = () => {
  return (
    <Flex flexDirection="row" flexWrap="wrap" width="100%">
      <BoardListSectionItem />
      <BoardListSectionItem />
      <BoardListSectionItem />
      <BoardListSectionItem />
    </Flex>
  );
};

export default BoardListSection;
