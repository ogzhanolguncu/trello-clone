import React, { useEffect } from 'react';

import Navbar from '../components/navbar';

const Boards = () => {
  useEffect(() => {
    document.title = 'Boards | Trello';
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Boards;
