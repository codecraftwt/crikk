import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import settingbg from "../../assets/images/settingbg.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordSuccessModal from "../../components/PasswordSuccessModal/PasswordSuccessModal";

const ChangePassword = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    agreed: false,
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agreed) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    if (form.newPassword !== form.confirmNewPassword) {
      alert("New passwords do not match.");
      return;
    }
    setModalOpen(true);
  };

  const toggleShow = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <>
    <Box
      sx={{
        height:"100%",
        width:"100%",
        boxSizing: "border-box",
        paddingRight:"1rem",
        paddingBottom:"1rem"
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
          display:"flex"
        }}
      >
          <Box
            sx={{
              width: "50%",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.5rem",
                },
              }}
            >
              Change Password
            </Typography>
            <Box sx={{display:"flex"}}>
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
                    Settings <ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} />
                  </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  padding: "1rem 0",
                  paddingLeft:"0.2rem",
                  color: "#8F8F8F",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.7rem",
                  },
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/account");
                }}
              >
                Account Settings
                <ArrowForwardIosIcon sx={{ fontSize: "0.7rem" }} />
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  padding: "1rem 0",
                  color: "#8F8F8F",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.7rem",
                  },
                }}
              >
                Change Password
              </Typography>
              </Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: "1.2rem",
                paddingBottom: "1rem",
                color: "#505050",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem",
                },
              }}
            >
              Please enter your current password and new password
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                [theme.breakpoints.down("sm")]: {
                  gap: 1,
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  color: "#555555",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.9rem",
                  },
                }}
              >
                Enter current password
              </Typography>
              <TextField
                type={showPassword.current ? "text" : "password"}
                placeholder="Current Password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => toggleShow("current")}
                        edge="end"
                      >
                        {showPassword.current ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  color: "#555555",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.9rem",
                  },
                }}
              >
                Enter new password
              </Typography>
              <TextField
                type={showPassword.new ? "text" : "password"}
                placeholder="New Password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => toggleShow("new")} edge="end">
                        {showPassword.new ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  color: "#555555",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.9rem",
                  },
                }}
              >
                Confirm new password
              </Typography>
              <TextField
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Confirm New Password"
                name="confirmNewPassword"
                value={form.confirmNewPassword}
                onChange={handleChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => toggleShow("confirm")}
                        edge="end"
                      >
                        {showPassword.confirm ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="agreed"
                    checked={form.agreed}
                    onChange={handleChange}
                    required
                  />
                }
                label="I agree to the terms and conditions"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: "#8A5CFF",
                  marginBottom: "2rem",
                  padding: "0.8rem 0",
                  textTransform: "none",
                }}
              >
                Change Password
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <Box sx={{ width: "100px" }}>
              <img src={settingbg} alt="bgimg" style={{ maxWidth: "500px" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <PasswordSuccessModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ChangePassword;
