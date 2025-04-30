import React, {useState} from "react";
import { Box } from "@mui/material";
import ProjectFile from "../../.shared/ProjectFile";

const DashboardContent = () => {
  const [projects, setProjects] = useState([]);

  const createProject = (projectName) => {
    const newProject = { name: projectName, files: 0 };
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const incrementFiles = (index) => {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[index].files += 1;
      return updatedProjects;
    });
  };

  const editProject = (index) => {
    const newProjectName = prompt("Enter new project name:");
    if (newProjectName) {
      setProjects((prevProjects) => {
        const updatedProjects = [...prevProjects];
        updatedProjects[index].name = newProjectName;
        return updatedProjects;
      });
    }
  };

  const deleteProject = (index) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.filter((_, i) => i !== index);
      return updatedProjects;
    });
  };

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "85%",
        padding: "1rem",
        paddingLeft: "0",
        paddingTop: "0",
      }}
    >
      <Box
        sx={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
          height: "100%",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={() => createProject("New Project")}>
            Create Project
          </button>
          <div>
            {projects.map((project, index) => (
              <ProjectFile
                key={index}
                projectName={project.name}
                fileCount={project.files}
                onEdit={() => editProject(index)}
                onDelete={() => deleteProject(index)}
              />
            ))}
          </div>

          <button onClick={() => incrementFiles(0)}>
            Add File to First Project
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default DashboardContent;
