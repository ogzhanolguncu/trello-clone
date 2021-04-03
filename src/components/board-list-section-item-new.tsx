import { Box, Text, useDisclosure } from '@chakra-ui/react';
import AddNewBoardModel from './add-new-board-model';

const BoardListSectionItemNew = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        width="23.5%"
        padding="0"
        margin="0 2% 2% 0"
        transform="translate(0)"
        cursor="pointer"
        _last={{ marginEnd: '0' }}
        _hover={{
          backgroundColor: 'rgba(9,30,66,.08)',
          boxShadow: 'none',
          border: 'none',
          color: '#172b4d',
        }}
      >
        <Box
          backgroundColor="rgba(9,30,66,.04)"
          boxShadow="none"
          border="none"
          color="#172b4d"
          display="table-cell"
          height="96px"
          fontWeight="400"
          textAlign="center"
          verticalAlign="middle"
          width="inherit"
          transitionProperty="background-color,border-color,box-shadow"
          transitionDuration="85ms"
          transitionTimingFunction="ease"
          onClick={onOpen}
        >
          <Text color="#172b4d" fontSize="14px">
            Create new board
          </Text>
        </Box>
      </Box>
      <AddNewBoardModel isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default BoardListSectionItemNew;
