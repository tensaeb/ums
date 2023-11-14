/* eslint-disable no-unused-vars */
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./data";

const CourseTable = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: 500,
        width: "70%",
        "& .super-app-theme--header": {
          backgroundColor: theme.palette.secondary.main,
        },
        margin: "auto",
        mt: 10,
      }}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        sx={{
          boxShadow: 2,
        }}
      />
    </Box>
  );
};

export default CourseTable;
