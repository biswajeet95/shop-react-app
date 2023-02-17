import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Product from "../components/Product";

const Home = () => {
  return (
    <Box sx={{ marginTop: 15 }}>
      <Header title="PRODUCT LIST" />
    <Product />
    </Box>
  );
};

export default Home;
