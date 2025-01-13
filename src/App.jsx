import { useState } from 'react'

import ProjectContextProvider from './store/project-state-context';

import OpeningModal from './components/OpeningModal';
import SideBar from './components/SideBar';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const storedName = localStorage.getItem('name');

  function handleCloseDialog() {
    setModalIsOpen(false);
  }

  return (
    <ProjectContextProvider>
      {storedName === null && <OpeningModal open={modalIsOpen} handleCloseDialog={handleCloseDialog}/>}
      <SideBar/>
    </ProjectContextProvider>
  );
}

export default App
