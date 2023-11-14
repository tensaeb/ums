/* eslint-disable no-unused-vars */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { Box, makeStyles, useTheme } from "@mui/material";

const StudentTable = () => {
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

export default StudentTable;
