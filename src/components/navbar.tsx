import { Flex } from '@chakra-ui/react';

import NavbarLeft from './navbar-left';
import NavbarMid from './navbar-mid';
import NavbarRight from './navbar-right';

const Navbar = () => {
  return (
    <Flex
      backgroundColor="#026aa7"
      boxSizing="border-box"
      maxHeight="40px"
      overflow="hidden"
      padding="4px"
    >
      <NavbarLeft />
      <NavbarMid />
      <NavbarRight />
    </Flex>
  );
};

export default Navbar;
