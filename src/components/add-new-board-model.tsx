import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  Input,
  Icon,
  Button,
} from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';

type AddNewBoardModel = {
  isOpen: boolean;
  onClose: () => void;
};

const AddNewBoardModel = ({ isOpen, onClose }: AddNewBoardModel) => {
  const [boardName, setBoardName] = useState<string>('');
  const colors = [
    'rgb(0, 121, 191)',
    'rgb(210, 144, 52)',
    'rgb(81, 152, 57)',
    'rgb(205, 90, 145)',
    'rgb(137, 96, 158)',
    'rgb(176, 70, 50)',
    'rgb(90, 205, 105)',
    'rgb(22, 87, 25)',
    'rgb(50, 58, 176)',
  ];

  return (
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
                onChange={({ target }) => setBoardName(target.value)}
                value={boardName}
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
                cursor="pointer"
                top="10px"
              />
            </Box>
            <Box
              width="100px"
              height="100px"
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
              listStyle="none"
              margin="0 0 0 8px"
            >
              {colors.map((color, index) => (
                <Box
                  key={index}
                  width="28px"
                  height="28px"
                  margin-bottom="6px"
                  backgroundColor={color}
                  borderRadius="3px"
                  backgroundPosition="50%"
                  backgroundSize="cover"
                  filter="brightness(100%)"
                  _hover={{ filter: 'brightness(90%)' }}
                >
                  <Box
                    alignItems="center"
                    background="none"
                    boxShadow="none"
                    color="hsla(0,0%,100%,.4)"
                    display="flex"
                    height="100%"
                    justifyContent="center"
                    margin="0"
                    minHeight="0"
                    outline="0"
                    padding="0"
                    position="relative"
                    lineHeight="0"
                    width="100%"
                    cursor="pointer"
                  />
                </Box>
              ))}
            </Box>
          </Flex>
          <Button
            width="105px"
            height="32px"
            border="none"
            marginTop="8px"
            borderRadius="4px"
            padding="6px 12px"
            fontSize="14px"
            color="#a5adba"
            _hover={{ backgroundColor: 'none' }}
            cursor={boardName ? 'pointer' : 'not-allowed'}
            disabled={!boardName}
            _disabled={{
              backgroundColor: '#f4f5f7',
            }}
          >
            Create board
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddNewBoardModel;
