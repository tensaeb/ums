/* eslint-disable no-unused-vars */
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TextHero from "./TextHero";
import ImageHero from "./ImageHero";

const HeroSection = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Stack
        direction={isSmScreen ? "column" : "row"}
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <Box width={isSmScreen ? "100%" : "50%"}>
          <TextHero />
        </Box>
        <Box width={isSmScreen ? "100%" : "37%"}>
          <ImageHero />
        </Box>
      </Stack>
    </div>
  );
};

export default HeroSection;
