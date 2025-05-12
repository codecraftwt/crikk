import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  IconButton,
  Grid,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ListIcon from "@mui/icons-material/List";

import ProjectFile from "../../shared/ProjectFile";
import ProjectFileList from "../../shared/ProjectFileList";

const DashboardContent = () => {
  const [viewMode, setViewMode] = useState("grid");
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
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        paddingRight: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
          height: "100%",
          overflowY: "auto",
          padding: "2rem",
          color: "#2B2B2B",
          marginLeft: { xs: "1rem", sm: "1rem", md: "0" },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#3E3E3E",
                fontSize: { xs: "0.9rem", sm: "1.5rem", md: "2rem" },
              }}
            >
              My Projects
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: {xs:"none",sm:"flex"}, alignItems:"center" }}>
                <Typography sx={{fontSize:
                {xs:"0.8rem", sm:"1rem", md:"1.2rem"}

                }}>Sort By: </Typography>
                <TextField
                  select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  size="small"
                >
                  <MenuItem disabled value="">
                    Sort By:
                  </MenuItem>
                  <MenuItem value="date">Date Created</MenuItem>
                  <MenuItem value="name">Project Name</MenuItem>
                </TextField>
              </Box>

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

          {viewMode === "grid" ? (
            <Grid
              container
              spacing={{ xs: 2, sm: 3 }}
              justifyContent="center"
              sx={{ px: 2 }}
            >
              {dummyProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                  <ProjectFile
                    projectName={project.name}
                    fileCount={project.fileCount}
                    onEdit={() => handleEdit(project.name)}
                    onDelete={() => handleDelete(project.name)}
                    isFullWidth={false}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ px: 2 }}>
              {dummyProjects.map((project, index) => (
                <Box key={index} sx={{ width: "100%", display: "flex" }}>
                  <ProjectFileList
                    projectName={project.name}
                    fileCount={project.fileCount}
                    onEdit={() => handleEdit(project.name)}
                    onDelete={() => handleDelete(project.name)}
                    isFullWidth={true}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContent;
