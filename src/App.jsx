import { useState } from 'react'

import OpeningModal from './components/OpeningModal';
import SideBar from './components/SideBar';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const storedName = localStorage.getItem('name');

  function handleCloseDialog() {
    setModalIsOpen(false);
  }

  return (
    <>
      {storedName === null && <OpeningModal open={modalIsOpen} handleCloseDialog={handleCloseDialog}/>}
      <SideBar/>
    </>
  );
}

export default App
