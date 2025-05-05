import React, { useState } from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import StarIcon from "@mui/icons-material/Star";
import EditUserModal from "../EditUserModal/EditUserModal";
const ProfileComponent = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: "Lorem",
    lastName: "Ipsum",
    email: "loremipsum@gmail.com",
    accountType: " Crikk Pro",
    monthlyCharacterLimit: "Unlimited",
  });

  const toggleModal = () => {
    setModalOpen(true);
  };

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <>
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
            boxSizing: "border-box",
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 1)",
            boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.06)",
            height: "100%",
            overflowY: "auto",
            padding: "2rem",
            color: "#2B2B2B",
            display: "flex",
            [theme.breakpoints.down("sm")]: {
              padding: "0.8rem",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "700",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "1.5rem",
                    },
                  }}
                >
                  Profile Settings
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.9rem",
                    padding: "1rem 0",
                    color: "#8F8F8F",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "0.7rem",
                    },
                  }}
                >
                  Settings <ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} />{" "}
                  Account Settings{" "}
                  <ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} /> Profile
                  Settings
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  onClick={toggleModal}
                  sx={{
                    color: "#8A5CFF",
                    border: "1px solid #8A5CFF",
                    padding: "0.6rem ",
                    borderRadius: "10px",
                    textTransform: "none",
                    zIndex: "9",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "0.6rem",
                      padding: "0.4rem",
                    },
                  }}
                >
                  <BorderColorOutlinedIcon
                    sx={{
                      color: "#8A5CFF",
                      marginRight: "0.5rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "0.8rem",
                      },
                    }}
                  />{" "}
                  Edit Profile
                </Button>
              </Box>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: "1.2rem",
                padding: "1rem 0",
                color: "#797979",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem",
                },
              }}
            >
              Update your personal information and preferences to keep your
              profile up-to-date.{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginTop: "3rem",
                [theme.breakpoints.down("md")]: {
                  display: "block",
                  marginTop: "1rem",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    justifyContent: "start",
                  },
                }}
              >
                <PersonIcon sx={{ marginRight: "2rem", color: "#FFA500" }} />
                <Box
                  sx={{
                    height: "4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                      height: "3rem",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    First Name
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.1rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "0.9rem",
                      },
                    }}
                  >
                    {user.firstName}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    justifyContent: "start",
                    marginTop: "1rem",
                  },
                }}
              >
                <PersonIcon sx={{ marginRight: "2rem", color: "#FFA500" }} />
                <Box
                  sx={{
                    height: "4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                      height: "3rem",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    Last Name
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.1rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    {user.lastName}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    justifyContent: "start",
                    marginTop: "1rem",
                  },
                }}
              >
                <EmailIcon sx={{ marginRight: "2rem", color: "#FFA500" }} />
                <Box
                  sx={{
                    height: "4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                      height: "3rem",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    Email Address
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.1rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    {user.email}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "4rem",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                  display: "block",
                  marginTop: "1rem",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    justifyContent: "start",
                  },
                }}
              >
                <StarIcon sx={{ marginRight: "2rem", color: "#FFA500" }} />
                <Box
                  sx={{
                    height: "4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                      height: "3rem",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    Account Type
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.1rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    {user.accountType}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    justifyContent: "start",
                    marginTop: "1rem",
                    paddingLeft: "3.5rem",
                    paddingBottom: "2rem",
                  },
                }}
              >
                <Box
                  sx={{
                    height: "4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                      height: "3rem",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    Monthly Character Limit{" "}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.1rem",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    {user.monthlyCharacterLimit}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <EditUserModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        user={user}
        onSave={handleSave}
      />
    </>
  );
};

export default ProfileComponent;
