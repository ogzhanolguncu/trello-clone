import { Box } from '@chakra-ui/react';
import React from 'react';

type MenuBottonProps = {
  children: React.ReactNode;
};

const CustomMenuButton = ({ children }: MenuBottonProps) => {
  return (
    <Box
      borderRadius="3px"
      border="0"
      textDecoration="none"
      alignItems="center"
      backgroundColor="hsla(0,0%,100%,.3)"
      boxShadow="none"
      color="#fff"
      display="flex"
      fontWeight="700"
      height="32px"
      lineHeight="32px"
      margin="0 4px 0 0"
      padding="0"
      whiteSpace="nowrap"
    >
      {children}
    </Box>
  );
};

export default CustomMenuButton;
