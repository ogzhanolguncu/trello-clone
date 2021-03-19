import { Flex, Icon, Text, Input, InputGroup, InputRightElement, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MenuButton from './menu-button';
import * as ROUTES from '../constants/routes';
import { User } from '@firebase/auth-types';

import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { FaTrello } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { BsArrowUpRight } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { CgMathPlus, CgBell } from 'react-icons/cg';
import { RiErrorWarningLine } from 'react-icons/ri';

type NavbarTypes = {
  user?: User;
};

const Navbar = ({ user }: NavbarTypes) => {
  const [inputClicked, setInputClicked] = useState(false);
  const [userIcon, setUserIcon] = useState<string>();

  const generateUserIcon = () => {
    const name = `${user?.displayName?.split(' ')[0][0]}${user?.displayName?.split(' ')[1][0]}`;
    setUserIcon(name);
  };

  useEffect(() => {
    generateUserIcon();
  }, []);

  return (
    <Flex
      backgroundColor="#026aa7"
      boxSizing="border-box"
      maxHeight="40px"
      overflow="hidden"
      padding="4px"
    >
      <Flex justifyContent="flex-start" flexBasis="100%">
        <MenuButton>
          <Icon as={BsFillGrid3X3GapFill} width="32px" />
        </MenuButton>
        <MenuButton>
          <Icon as={HiOutlineHome} width="32px" />
        </MenuButton>
        <MenuButton>
          <Icon as={FaTrello} width="32px" />
          <Text fontSize="14px" padding="0 8px 0 2px">
            Boards
          </Text>
        </MenuButton>
        <MenuButton>
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
        </MenuButton>
      </Flex>
      <Flex>
        <Link to={ROUTES.BOARDS}>
          <Image
            src="/static/images/board-trello-icon.gif"
            width="170px"
            height="16px"
            margin="7px 0"
            position="relative"
            opacity=".5"
          />
        </Link>
      </Flex>
      <Flex justifyContent="flex-end" flexBasis="100%">
        <MenuButton>
          <Icon as={CgMathPlus} width="32px" />
        </MenuButton>
        <MenuButton>
          <Icon as={RiErrorWarningLine} width="32px" />
        </MenuButton>
        <MenuButton>
          <Icon as={CgBell} width="32px" />
        </MenuButton>
      </Flex>
      <Flex backgroundColor="#172B4D" line-height="32px" color="#fff" borderRadius="50%">
        <Flex
          as="span"
          height="32px"
          width="32px"
          alignItems="center"
          justifyContent="center"
          fontSize="14px"
          fontWeight="500"
        >
          {userIcon}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
