// SubScriptionsModal.jsx
import { Modal, Box, Typography, IconButton, Button, Grid, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const plans = [
  { title: "Basic", price: "$9/month" },
  { title: "Pro", price: "$19/month" },
  { title: "Enterprise", price: "$49/month" },
];

const SubScriptionsModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 600 },
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
          Choose the plan that works best for you
        </Typography>

        <Grid container spacing={2}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={4} key={plan.title}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: "center",
                  borderRadius: "10px",
                  border: "1px solid #eee",
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {plan.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {plan.price}
                </Typography>
                <Button variant="contained" size="small">
                  Upgrade Now
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default SubScriptionsModal;
