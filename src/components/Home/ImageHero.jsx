/* eslint-disable no-unused-vars */
// ImageHero.jsx
import React from "react";
import { Box } from "@mui/material";
import heroImage from "../../assets/hero.png";

const ImageHero = () => {
  return (
    <Box>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "100%", // Adjusted to cover the entire height of the parent Box
          objectFit: "cover",
        }}
        alt="Hero Section Image"
        src={heroImage}
      />
    </Box>
  );
};

export default ImageHero;
