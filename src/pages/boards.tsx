import React, { useEffect } from 'react';

import Navbar from 'components/navbar';
import MainContainer from 'components/main-container';
import BoardSection from 'components/board-section';

const Boards = () => {
  useEffect(() => {
    document.title = 'Boards | Trello';
  }, []);

  return (
    <>
      <Navbar />
      <MainContainer>
        <BoardSection />
      </MainContainer>
    </>
  );
};

export default Boards;
