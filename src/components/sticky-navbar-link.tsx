import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';

import { IconType } from 'react-icons';

import { Link, useLocation } from 'react-router-dom';

type StickyNavbarLinkProps = {
  text: string;
  route: string;
  icon: IconType;
};

const StickyNavbarLink = ({ text, route, icon }: StickyNavbarLinkProps) => {
  const { pathname } = useLocation();
  return (
    <Link to={route}>
      <Flex
        flexDirection="row"
        alignItems="center"
        backgroundColor={pathname === route ? '#e4f0f6' : 'transparent'}
        borderRadius="3px"
        marginBottom="4px"
        _hover={{ color: '#091e42', background: 'rgba(9,30,66,.08)' }}
        textDecoration="none"
      >
        <Icon
          as={icon}
          width="32px"
          backgroundColor={pathname === route ? '#e4f0f6' : 'transparent'}
          color={pathname === route ? '#0079bf' : '#172b4d'}
        />
        <Text
          fontSize="14px"
          alignItems="center"
          backgroundColor={pathname === route ? '#e4f0f6' : 'transparent'}
          color={pathname === route ? '#0079bf' : '#172b4d'}
          borderRadius="4px"
          boxShadow="none"
          display="flex"
          fontWeight="700"
          margin="0"
          minHeight="20px"
          overflow="hidden"
          padding="6px 8px 6px 0"
          textDecoration="none"
          transitionProperty="background-color,border-color,box-shadow"
          transitionDuration="85ms"
          transitionTimingFunction="ease"
        >
          {text}
        </Text>
      </Flex>
    </Link>
  );
};

export default StickyNavbarLink;
