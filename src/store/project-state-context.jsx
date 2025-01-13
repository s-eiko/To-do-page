import { createContext, useState } from "react";

export const ProjectContext = createContext({
    projects: [],
    addProject: () => {},
    setNewProject: () =>  {},
    deleteProject: () => {},
    selectedProject: undefined,
    tasks: []
})

export default function ProjectContextProvider({ children }) {
    const [currentProjectList, setCurrentProjectList] = useState([]);
    const [createdId, setCreatedId] = useState(0);

    function handleAddProject() {
        setCurrentProjectList(prevState => {
            return {
              ...prevState,
              selectedProject: null,
            };
        });
    }

    function handleSetProject(projectData) {
        setCurrentProjectList(prevState => {
            const newProject = {
              ...projectData,
              id: createdId
            };

            setCreatedId(prevId => {
                return prevId++;
            })
      
            return {
              ...prevState,
              selectedProject: undefined,
              projects: [...prevState.projects, newProject]
            };
        });
    }

    function handleDeleteProject() {
        setCurrentProjectList(prevState => {
            return {
              ...prevState,
              selectedProject: undefined,
              projects: prevState.projects.filter(
                (project) => project.id !== prevState.selectedProjectId
              )
            };
        });
    }

    function handleSelectProject(projectId) {
        setCurrentProjectList(prevState => {
            return {
              ...prevState,
              selectedProject: id,
            };
        });
    }

    const contextValue = {
        projects: currentProjectList,
        addProject: handleAddProject,
        setNewProject: handleSetProject,
        deleteProject: handleDeleteProject,
        selectedProject: undefined,
        tasks: selectedProject.tasks
    }

    return (
        <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
    );
}