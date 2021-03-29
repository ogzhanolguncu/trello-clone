import { Flex, Icon, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';

import React, { useState } from 'react';

import { BsFillGrid3X3GapFill, BsArrowUpRight } from 'react-icons/bs';
import { FaTrello } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineHome } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import CustomMenuButton from './custom-menu-button';

const NavbarLeft = () => {
  const [inputClicked, setInputClicked] = useState(false);

  return (
    <Flex justifyContent="flex-start" flexBasis="100%">
      <CustomMenuButton>
        <Icon as={BsFillGrid3X3GapFill} width="32px" />
      </CustomMenuButton>
      <CustomMenuButton>
        <Icon as={HiOutlineHome} width="32px" />
      </CustomMenuButton>
      <CustomMenuButton>
        <Icon as={FaTrello} width="32px" />
        <Text fontSize="14px" padding="0 8px 0 2px">
          Boards
        </Text>
      </CustomMenuButton>
      <CustomMenuButton>
        <Flex
          width={inputClicked ? '380px' : '184px'}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          onClick={() => setInputClicked(true)}
          onBlur={() => setInputClicked(false)}
          transition="width .15s"
        >
          <InputGroup>
            <Input
              fontSize="14px"
              padding="0 8px"
              placeholder={inputClicked ? 'Search...' : 'Jump to...'}
              border="0"
              _placeholder={{ color: inputClicked ? '#42526e' : '#fff' }}
              _focus={{ boxShadow: '0' }}
              backgroundColor={inputClicked ? '#fff' : 'transparent'}
              boxShadow="none"
              height={inputClicked ? '35px' : '40px'}
            />
            {inputClicked ? (
              <InputRightElement
                position="absolute"
                marginRight="1rem"
                fontSize="1rem"
                cursor="pointer"
              >
                <Icon as={BsArrowUpRight} width="32px" color="#42526e" />
                <Icon as={IoMdClose} width="32px" color="#42526e" />
              </InputRightElement>
            ) : (
              <InputRightElement pointerEvents="none">
                <Icon as={FiSearch} width="32px" />
              </InputRightElement>
            )}
          </InputGroup>
        </Flex>
      </CustomMenuButton>
    </Flex>
  );
};

export default NavbarLeft;
