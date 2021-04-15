import React, { useContext, useEffect, useState } from 'react';
import { Flex, Skeleton, Text } from '@chakra-ui/react';

import BoardListSectionItem from './board-list-section-item';
import BoardListSectionItemNew from './board-list-section-item-new';

import UserContext from 'contexts/userContext';
import FirebaseContext from 'contexts/firebaseContext';

type BoardListSectionProps = {
  name: string;
};

type boardType = {
  name: string;
  ownerId: string;
  backgroundColorOrImage: string;
  starred: boolean;
};

const BoardListSection = ({ name }: BoardListSectionProps) => {
  const [boards, setBoards] = useState<boardType[] | undefined>();
  const user = useContext(UserContext)?.user;
  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebaseContext?.firebase
      .firestore()
      .collection('boards')
      .where('ownerId', '==', user?.uid)
      .onSnapshot((snapShot) => {
        const boards = (snapShot.docs.map((x) => x.data()) as unknown) as boardType[];
        setBoards(boards);
      });

    return () => listener?.();
  }, []);

  return (
    <Flex flexDirection="row" flexWrap="wrap" width="100%">
      {boards?.map((board, index) => (
        <BoardListSectionItem
          key={`${name}${index}${board.ownerId}`}
          name={board.name}
          backgroundColorOrImage={board.backgroundColorOrImage}
        />
      ))}
      {!boards && (
        <>
          <Skeleton height="96px" width="195px" marginRight="5px" padding="8px">
            <Text>Placeholder!!</Text>
          </Skeleton>
          <Skeleton height="96px" padding="8px" width="195px" marginRight="5px">
            <Text>Placeholder!!</Text>
          </Skeleton>
        </>
      )}

      <BoardListSectionItemNew />
    </Flex>
  );
};

export default BoardListSection;
