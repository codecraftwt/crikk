import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import crown from "../../assets/logos/Vector.png";
import prem1 from "../../assets/logos/freesub.svg";
import prem2 from "../../assets/logos/freesub2.png";
const Subscription = () => {

  const plans = [
    {
      title: "Free Plan",
      access: "Get",
      price: "$0",
      till: "",
      includes: [
        { tick: true, feature: "20,000 Characters" },
        { tick: true, feature: "Free Voices Only" },
        { tick: false, feature: "Pro Voices" },
        { tick: false, feature: "Speaking Styles" },
      ],
    },
    {
      title: "Crikk Pro",
      access: "Monthly",
      price: "$14",
      till: "/Monthly",
      includes: [
        { tick: true, feature: "Unlimited Characters (Free Voices)" },
        { tick: true, feature: "300k Character (Pro Voices)" },
        { tick: true, feature: "318 Free Voices & 246 Pro Voices" },
        { tick: true, feature: "Speaking Styles" },
      ],
    },
    {
      title: "Crikk Pro",
      access: "Lifetime",
      price: "$97",
      till: "Lifetime",
      includes: [
        { tick: true, feature: "Unlimited Characters (Free Voices)" },
        { tick: true, feature: "300k Character (Pro Voices)" },
        { tick: true, feature: "318 Free Voices & 246 Pro Voices" },
        { tick: true, feature: "Speaking Styles" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        height:"100%",
        width:"100%",
        boxSizing: "border-box",
        paddingRight:"1rem",
        paddingBottom:"1rem",
        paddingLeft: { xs: "1rem", sm: "1rem", md: "0" },
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
          paddingLeft:{xs:"2rem", sm:"0"}
        }}
      >
        <Typography variant="h6" fontWeight="bold" textAlign="center" mb={4}>
          Choose the plan that works best for you
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            overflowX: { xs: "auto", md: "auto" },
            flexWrap: { xs: "nowrap", md: "nowrap" },
            gap: 3,
            pb: 1,
            minWidth: "320px",
            justifyContent:{xs:"start", sm:"start", md:"center"},

            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            scrollbarWidth: "none",
          }}
        >
          {plans.map((plan, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "0 0 80%", sm: "0 0 50%", md: "1 1 300px" },
                maxWidth: { md: "350px" },
              }}
            >
              <Card
                sx={{
                  borderRadius: 5,
                  background:
                    index === 1
                      ? "linear-gradient(180deg, #C7B2FF -10%, #8657FB 100%)"
                      : "#f7f7f7",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  color: index === 1 ? "#fff" : "black",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex" }} m={1}>
                    <img
                      src={index === 0 ? prem1 : prem2}
                      alt="img"
                      style={{ width: "50px" }}
                    />
                    <Box ml={2}>
                      <Typography
                        variant="subtitle2"
                        color={index === 1 ? "#ddd" : "text.secondary"}
                      >
                        {plan.access}
                      </Typography>
                      <Typography variant="h6" fontWeight={600}>
                        {plan.title}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="h5"
                      mt={1}
                      mb={2}
                      fontWeight={700}
                      fontSize={40}
                      sx={{ color: index === 1 ? "#fff" : "#170F49" }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={index === 1 ? "#ddd" : "text.secondary"}
                      ml={1}
                      fontSize={15}
                      sx={{ color: index === 1 ? "#fff" : "#170F49" }}
                    >
                      {plan.till}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: index === 1 ? "#fff" : "#170F49",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    What's Included
                  </Typography>

                  <List>
                    {plan.includes.map((item, idx) => (
                      <ListItem key={idx} sx={{ paddingY: "4px" }}>
                        <ListItemIcon>
                          {item.tick ? (
                            <CheckCircleIcon
                              sx={{
                                height: "2rem",
                                color: index === 1 ? "#fff" : "#8A5CFF",
                              }}
                            />
                          ) : (
                            <CheckCircleIcon
                              sx={{ height: "2rem", color: "lightgray" }}
                            />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box
                              display="flex"
                              alignItems="center"
                              gap="0.5rem"
                            >
                              <span style={{ fontSize: "0.8rem" }}>
                                {item.feature}
                              </span>
                              {!item.tick && (
                                <img
                                  src={crown}
                                  alt="crown"
                                  style={{ width: "1.3rem" }}
                                />
                              )}
                            </Box>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box textAlign="center" mt={2}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: index === 1 ? "#fff" : "#8a5cff",
                        color: index === 1 ? "#8a5cff" : "#fff",
                        textTransform: "none",
                        fontWeight: 600,
                        width: "90%",
                        borderRadius: "25px",
                        height: "3rem",
                        "&:hover": {
                          backgroundColor:
                            index === 1 ? "lightgray" : "#7a4be8",
                        },
                      }}
                    >
                      {index === 0 ? "Get Started" : "Upgrade Now"}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
            color: "#979797",
            fontSize: "0.8rem",
          }}
        >
          Terms & conditions apply*
        </Typography>
      </Box>
  </Box>
  )
}

export default Subscription