import React, { useState } from "react";
import {
  Box,
  Typography,
  Collapse,
  Paper,
  IconButton,
  useTheme,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import asset1 from "../../assets/images/asset1.png";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const faqData = [
  {
    question: "Which pricing plan is right for me?",
    answer:
      "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
  },
  { question: "What if I change my mind?", answer: "Answer to question 2." },
  { question: "How does our pricing work?", answer: "Answer to question 3." },
  {
    question: "Do you offer any discounted plans?",
    answer: "Answer to question 4.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Answer to question 5.",
  },
  {
    question: "Does Rephub offer plans to nonprofits and NGOs?",
    answer: "Answer to question 6.",
  },
  {
    question: "How can I manage my billing?",
    answer: "Answer to question 7.",
  },
  { question: "Can I change my plan?", answer: "Answer to question 8." },
];
const HelpCenterContent = () => {
  const [open, setOpen] = useState(Array(faqData.length).fill(false));
  const theme = useTheme();

  const handleToggle = (index) => {
    setOpen((prev) => prev.map((item, i) => (i === index ? !item : item)));
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
          width: "100%",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            boxSizing: "border-box",
            padding: "1rem",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column-reverse",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              width: "50%",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column-reverse",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ padding: "1rem", margin: "1.5rem 0", lineHeight: "30px" }}
            >
              Welcome to our Help Center! Here, you’ll find resources, guides,
              and answers to frequently asked questions to help you get the most
              out of our platform. Our team is here to support you every step of
              the way.
            </Typography>
            <Typography
              variant="body2"
              sx={{ padding: "0 1rem", color: "#6A707C", fontSize: "1.1rem" }}
            >
              For any queries or feedbacks please mail us at-
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
              }}
            >
              {/* Email Section */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MailIcon sx={{ color: "#FFA500", fontSize: "24px" }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    "&:hover": { color: "primary.main" },
                    textDecoration: "none",
                  }}
                  component="a"
                  href="mailto:support@crikk.com"
                >
                  support@crikk.com
                </Typography>
              </Box>

              {/* Phone Section */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ color: "#FFA500", fontSize: "24px" }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    "&:hover": { color: "primary.main" },
                    textDecoration: "none",
                  }}
                  component="a"
                  href="tel:+18885545555"
                >
                  +1 (888) 5545-555
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  paddingTop: "1rem",
                  color: "#6A707C",
                  fontSize: "1.1rem",
                }}
              >
                For any payments or subscription related queries, please mail us
                at-{" "}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MailIcon sx={{ color: "#FFA500", fontSize: "24px" }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    "&:hover": { color: "primary.main" },
                    textDecoration: "none",
                  }}
                  component="a"
                  href="mailto:payments@crikk.com"
                >
                  payments@crikk.com
                </Typography>
              </Box>
            </Box>{" "}
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            <img src={asset1} alt="image" style={{ width: "100%" }} />
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "700" }}
          >
            Frequently Asked Questions
          </Typography>
          <Box sx={{ maxWidth: 800, mx: "auto", my: 4 }}>
            {faqData.map((item, index) => (
              <Paper key={index} sx={{ mb: 2, p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "1rem",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      flexGrow: 1,
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "0.9rem",
                      },
                      [theme.breakpoints.up("lg")]: {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    {item.question}
                  </Typography>
                  <IconButton onClick={() => handleToggle(index)}>
                    {open[index] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </Box>
                <Collapse in={open[index]}>
                  <Typography sx={{ mt: 2,       [theme.breakpoints.down("sm")]: {
                        fontSize: "0.8rem",
                      }, }}>{item.answer}</Typography>
                </Collapse>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HelpCenterContent;
