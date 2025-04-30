import React, {useState} from "react";
import { Box, Typography, TextField, MenuItem, IconButton,  } from "@mui/material";
import ProjectFile from "../../.shared/ProjectFile";
import AppsIcon from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/List';

const DashboardContent = () => {
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
const [sort, setSort] = useState("date");

  const dummyProjects = [
    { name: "Project 1", fileCount: 0 },
    { name: "Project 2", fileCount: 3 },
    { name: "Project 3", fileCount: 5 },
    { name: "Project 1", fileCount: 0 },
    { name: "Project 2", fileCount: 3 },
    { name: "Project 3", fileCount: 5 },
  ];

  // Dummy handlers for edit and delete (these can be replaced with actual handlers)
  const handleEdit = (projectName) => {
    alert(`Editing ${projectName}`);
  };

  const handleDelete = (projectName) => {
    alert(`Deleting ${projectName}`);
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
          flexDirection: "column",
        }}
      >
<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    gap: 2,
  }}
>
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    My Projects
  </Typography>

  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    {/* Sort Dropdown */}
    <TextField
      select
      label="Sort by"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      size="small"
    >
      <MenuItem value="date">Date Created</MenuItem>
      <MenuItem value="name">Project Name</MenuItem>
    </TextField>

    {/* View Toggle */}
    <IconButton onClick={() => setViewMode("grid")} color={viewMode === "grid" ? "primary" : "default"}>
      <AppsIcon />
    </IconButton>
    <IconButton onClick={() => setViewMode("list")} color={viewMode === "list" ? "primary" : "default"}>
      <ListIcon />
    </IconButton>
  </Box>
</Box>

<Box
  sx={{
    display: "flex",
    flexDirection: viewMode === "list" ? "column" : "row",
    flexWrap: viewMode === "grid" ? "wrap" : "nowrap",
    gap: 2,
    justifyContent: viewMode === "grid" ? "flex-start" : "initial",
  }}
>
  {dummyProjects.map((project, index) => (
    <ProjectFile
      key={index}
      projectName={project.name}
      fileCount={project.fileCount}
      onEdit={() => handleEdit(project.name)}
      onDelete={() => handleDelete(project.name)}
      isFullWidth={viewMode === "list"}
    />
  ))}
</Box>

      </Box>
    </Box>
  );
};

export default DashboardContent;
