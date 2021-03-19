import React, { useEffect } from 'react';

import Navbar from '../components/navbar';
import { User } from '@firebase/auth-types';

type BoardsTypes = {
  user?: User;
};

const Boards = ({ user }: BoardsTypes) => {
  useEffect(() => {
    document.title = 'Boards | Trello';
  }, []);

  return (
    <>
      <Navbar user={user} />
    </>
  );
};

export default Boards;
