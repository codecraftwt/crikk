import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";
import ProjectFile from "../../shared/ProjectFile";
import AppsIcon from "@mui/icons-material/Apps";
import ListIcon from "@mui/icons-material/List";
import Grid from '@mui/material/Grid';
import ProjectFileList from "../../shared/ProjectFileList";

const DashboardContent = () => {
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [sort, setSort] = useState("date");
  const navigate = useNavigate();

  const dummyProjects = [
    { name: "Project 1", fileCount: 0 },
    { name: "Project 2", fileCount: 3 },
    { name: "Project 3", fileCount: 5 },
    { name: "Project 4", fileCount: 0 },
    { name: "Project 5", fileCount: 3 },
    { name: "Project 6", fileCount: 5 },
  ];

  const handleEdit = (projectName) => {
    alert(`Editing ${projectName}`);
  };

  const handleDelete = (projectName) => {
    alert(`Deleting ${projectName}`);
  };

  const toggledata = () => {
    navigate("/dashboarddata");
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
        }}
      >
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1.5rem 0",
              boxSizing: "border-box",
              padding: "0 1rem",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3E3E3E" }}
            >
              My Projects
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
              <IconButton
                onClick={() => setViewMode("grid")}
                color={viewMode === "grid" ? "primary" : "default"}
              >
                <AppsIcon />
              </IconButton>
              <IconButton
                onClick={() => setViewMode("list")}
                color={viewMode === "list" ? "primary" : "default"}
              >
                <ListIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: viewMode === "list" ? "column" : "row",
              flexWrap: viewMode === "grid" ? "wrap" : "nowrap",
              // background: "lightblue",
              height: viewMode === "list" ? "100%" : "auto",
              width: "100%",
              boxSizing: "border-box",
              overflowY: "auto",
              justifyContent: viewMode === "grid" ? "flex-start" : "initial",
            }}
          >
            <Grid
              container
              spacing={{ xs: 1, sm:2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12, lg:16, xl:20}}
            >
              {dummyProjects.map((project, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>

                    <ProjectFile
                      key={index}
                      projectName={project.name}
                      fileCount={project.fileCount}
                      onEdit={() => handleEdit(project.name)}
                      onDelete={() => handleDelete(project.name)}
                      isFullWidth={viewMode === "list"}
                    />
                </Grid>
              ))}
            </Grid>
            {/* {dummyProjects.map((project, index) => (
              <ProjectFile
                key={index}
                projectName={project.name}
                fileCount={project.fileCount}
                onEdit={() => handleEdit(project.name)}
                onDelete={() => handleDelete(project.name)}
                isFullWidth={viewMode === "list"}
              /> */}
              {/* <ProjectFileList */}
              {/* //   key={index}
              //   projectName={project.name}
              //   fileCount={project.fileCount}
              //   onEdit={() => handleEdit(project.name)}
              //   onDelete={() => handleDelete(project.name)}
              //   isFullWidth={viewMode === "list"}
              // />
            // ))} */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContent;
