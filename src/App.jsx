import { useState } from 'react'

import OpeningModal from './components/OpeningModal';
import SideBar from './components/SideBar';
import NewProject from './components/NewProject';
import ProjectUndefined from './components/ProjectUndefined';
import CurrentProject from './components/CurrentProject';

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
        id: Math.random()
      };

      return {
        ...prevState,
        currentProject: undefined,
        projects: [...prevState.projects, newProject]
      };
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

  function handleAddTask(taskDescription) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        description: taskDescription,
        projectId: prevState.currentProject,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId)
      };
    });
  }

  let currentContent;

  console.log("Tasks in App: " + projectState.tasks.length);
  
  if (projectState.currentProject === null) {
    currentContent = <NewProject handleSetProject={handleSetProject} handleCancelProject={handleCancelProject} />;
  } else if (projectState.currentProject === undefined) {
    currentContent = <ProjectUndefined handleAddProject={handleAddProject} />;
  } else {
    const currentProject = projectState.projects.find(
      (project) => project.id === projectState.currentProject
    );
    currentContent = <CurrentProject
      currentProject={currentProject}
      handleDeleteProject={handleDeleteProject}
      tasks={projectState.tasks}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
    />;
  }

  return (
    <main>
      {storedName === null && <OpeningModal open={modalIsOpen} handleCloseDialog={handleCloseDialog}/>}
      <SideBar
        projects={projectState.projects}
        handleAddProject={handleAddProject}
        handleSelectProject={handleSelectProject}
        currentProject={projectState.currentProject}
      />
      {currentContent}
    </main>
  );
} 

export default App;