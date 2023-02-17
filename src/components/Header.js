import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title }) => {
  return (
    <Box mb="20px">
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "black" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
