import { Flex, Image } from '@chakra-ui/react';

import * as ROUTES from 'constants/routes';

import { Link } from 'react-router-dom';

const NavbarMid = () => {
  return (
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
  );
};

export default NavbarMid;
