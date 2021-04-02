import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CgMathPlus, CgBell } from 'react-icons/cg';
import { IoCloseSharp } from 'react-icons/io5';
import { RiErrorWarningLine } from 'react-icons/ri';

import FirebaseContext from 'contexts/firebaseContext';
import UserContext from 'contexts/userContext';

import CustomMenuButton from './custom-menu-button';
import MenuText from './menu-text';

import * as ROUTES from 'constants/routes';

const NavbarRight = () => {
  const user = useContext(UserContext)?.user;
  const firebase = useContext(FirebaseContext)?.firebase;
  const history = useHistory();

  const [userIcon, setUserIcon] = useState<string>();
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const generateUserIcon = () => {
    const name = `${user?.displayName?.split(' ')[0][0].toUpperCase()}${user?.displayName
      ?.split(' ')[1][0]
      .toUpperCase()}`;
    console.log({ name, user });
    setUserIcon(name);
  };
  useEffect(() => {
    generateUserIcon();
  }, []);

  return (
    <>
      <Flex justifyContent="flex-end" flexBasis="100%">
        <CustomMenuButton>
          <Icon as={CgMathPlus} width="32px" />
        </CustomMenuButton>
        <CustomMenuButton>
          <Icon as={RiErrorWarningLine} width="32px" />
        </CustomMenuButton>
        <CustomMenuButton>
          <Icon as={CgBell} width="32px" />
        </CustomMenuButton>
      </Flex>
      <Flex
        backgroundColor="#172B4D"
        line-height="32px"
        color="#fff"
        borderRadius="50%"
        cursor="pointer"
        onClick={() => setDropdownVisible((prevState) => !prevState)}
      >
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
      {dropdownVisible && (
        <Box
          position="fixed"
          width="304px"
          willChange="top, right"
          top="44px"
          right="0"
          lineHeight="20px"
          fontWeight="400"
          backgroundColor="#fff"
          borderRadius="3px"
          boxShadow="0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%)"
          boxSizing="border-box"
          outline="0"
          overflow="hidden"
        >
          <Flex flexDirection="column">
            <Flex
              height="40px"
              alignItems="center"
              borderBottom="1px solid rgba(9,30,66,.13)"
              padding="0 12px"
              marginBottom="8px"
            >
              <Text display="flex" justifyContent="center" width="90%" fontSize="14px">
                Account
              </Text>
              <Icon display="flex" justifyContent="flex-end" width="10%" as={IoCloseSharp} />
            </Flex>
            <Flex flexDirection="row" alignItems="center">
              <Flex
                as="span"
                height="40px"
                width="40px"
                alignItems="center"
                justifyContent="center"
                fontSize="16px"
                fontWeight="500"
                backgroundColor="#172B4D"
                line-height="32px"
                color="#fff"
                borderRadius="50%"
                marginX="10px"
              >
                {userIcon}
              </Flex>
              <Flex flexDirection="column">
                <Text fontSize="14px" fontWeight="500">
                  {user?.displayName}
                </Text>
                <Text
                  fontSize="9pt"
                  color="#b3bac5"
                  display="block"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  maxWidth="230px"
                >
                  {user?.email}
                </Text>
              </Flex>
            </Flex>
            <Flex borderBottom="1px solid rgba(9,30,66,.13)" marginBottom="8px">
              <MenuText text="Add another account" />
            </Flex>
            <Flex
              borderBottom="1px solid rgba(9,30,66,.13)"
              marginBottom="8px"
              flexDirection="column"
            >
              <MenuText text="Profile and visibility" />
              <MenuText text="Activity" />
              <MenuText text="Cards" />
              <MenuText text="Settings" />
            </Flex>
            <Flex
              borderBottom="1px solid rgba(9,30,66,.13)"
              marginBottom="8px"
              flexDirection="column"
            >
              <MenuText text="Help" />
              <MenuText text="Shortcuts" />
              <MenuText text="Settings" />
            </Flex>
            <Flex marginBottom="8px" flexDirection="column">
              <MenuText
                text="Logout"
                onClick={() => {
                  firebase?.auth().signOut();
                  history.push(ROUTES.LOGIN);
                }}
                onKeyDown={(event: KeyboardEvent) => {
                  if (event.key === 'Enter') {
                    firebase?.auth().signOut();
                    history.push(ROUTES.LOGIN);
                  }
                }}
              />
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default NavbarRight;
