/* eslint-disable no-unused-vars */
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const TextHero = () => {
  return (
    <Box
      width={{ xs: "100%", md: 600 }}
      textAlign={{ xs: "center", md: "left" }}
    >
      <Typography sx={{ fontWeight: "800" }} variant="h2" component="h4">
        Harmony in Learning
      </Typography>
      <Typography
        sx={{ fontWeight: "800" }}
        color="primary"
        variant="h2"
        component="h4"
      >
        Uniting Curiosity and Knowledge
      </Typography>
      <Typography variant="body" component="p" sx={{ mt: 2 }}>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </Typography>
      <Box sx={{ flexDirection: "row", mt: 2 }}>
        <Button variant="contained">Explore</Button>
        <Button variant="outlined" sx={{ mx: 3 }}>
          Watch Video
        </Button>
      </Box>
    </Box>
  );
};

export default TextHero;
