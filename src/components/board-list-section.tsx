import React from 'react';
import { Flex } from '@chakra-ui/react';

import BoardListSectionItem from './board-list-section-item';
import BoardListSectionItemNew from './board-list-section-item-new';

const BoardListSection = () => {
  return (
    <Flex flexDirection="row" flexWrap="wrap" width="100%">
      <BoardListSectionItem />
      <BoardListSectionItem />
      <BoardListSectionItem />
      <BoardListSectionItem />
      <BoardListSectionItemNew />
    </Flex>
  );
};

export default BoardListSection;
