import React from 'react';
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Flex,
  Input,
  Icon,
} from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';

const BoardListSectionItemNew = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="transparent"
          boxShadow="none"
          position="relative"
          top="35px"
          marginY="0"
        >
          <ModalBody>
            <Flex>
              <Box
                backgroundSize="cover"
                backgroundPosition="50%"
                borderRadius="3px"
                boxSizing="border-box"
                height="96px"
                padding="10px 10px 10px 16px"
                position="relative"
                width="296px"
                backgroundColor="rgb(0, 121, 191)"
              >
                <Input
                  border="none!important"
                  background="transparent!important"
                  boxShadow="none"
                  boxSizing="border-box"
                  marginBottom="4px"
                  padding="2px 8px"
                  position="relative"
                  height="30px"
                  left="-8px"
                  width="calc(100% - 18px - 16px)"
                  color="#fff"
                  fontWeight="700"
                  placeholder="Add board title"
                  _placeholder={{
                    fontFamily:
                      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    left: '-8px',
                    lineHeight: '24px',
                    color: 'rgba(255, 255, 255, 0.603)',
                  }}
                  _focus={{
                    boxShadow: 'none',
                    backgroundColor: 'hsla(0,0%,100%,.3)!important',
                    borderRadius: '3px',
                    caretColor: '#fff',
                  }}
                  _hover={{
                    background: 'hsla(0,0%,100%,.15)!important',
                    boxShadow: 'none',
                  }}
                />
                <Icon
                  as={IoMdClose}
                  width="16px"
                  color="#fff"
                  onClick={onClose}
                  position="absolute"
                  right="10px"
                  top="10px"
                />
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BoardListSectionItemNew;
