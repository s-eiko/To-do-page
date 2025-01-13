import { useState } from 'react'

import OpeningModal from './components/OpeningModal';
import SideBar from './components/SideBar';
import NewProject from './components/NewProject';
import ProjectUndefined from './components/ProjectUndefined'
import CurrentProject from './components/currentProject';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [projectState, setProjectState] = useState({
    projects: [],
    currentProject: undefined,
    /* Undefined: new project modal hidden
       Null: new project modal open
       Id: modal of project with selected id open */
    tasks: []
  });
  const [newId, setNewId] = useState(0);

  const storedName = localStorage.getItem('name');

  function handleCloseDialog() {
    setModalIsOpen(false);
  }

  function handleAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        currentProject: null
      };
    });
  }

  // Setting the configured new project to the project list
  function handleSetProject(projectInfo) {
    setProjectState(prevState => {
      const newProject = {
        ...projectInfo,
        id: newId
      };

      return {
        ...prevState,
        currentProject: undefined,
        projects: [...prevState.projects, newProject]
      };
    });

    setNewId(prevId => {
      return prevId++;
    });
  }

  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        currentProject: undefined
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        currentProject: projectId
      };
    });
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        currentProject: undefined,
        // Filtering out the selected project by it's id
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.currentProject
        )
      };
    });
  }

  // Setting the currentProject
  const currentProject = projectState.projects.find(project => project.id === projectState.currentProject);

  let currentContent =<CurrentProject currentProject={currentProject} handleDeleteProject={handleDeleteProject}/>;

  if (projectState.currentProject === null) {
    currentContent = <NewProject handleSetProject={handleSetProject} handleCancelProject={handleCancelProject} />
  } else if (projectState.currentProject === undefined) {
    currentContent = <ProjectUndefined handleAddProject={handleAddProject}/>;
  }

  return (
    <>
      {storedName === null && <OpeningModal open={modalIsOpen} handleCloseDialog={handleCloseDialog}/>}
      <SideBar
        projects={projectState.projects}
        handleAddProject={handleAddProject}
        handleSelectProject={handleSelectProject}
        currentProject={projectState.currentProject}
      />
      {currentContent}
    </>
  );
} 

export default App;