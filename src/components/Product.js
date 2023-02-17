import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  //const [products, setProducts] = useState([]);
  // const productList = async () => {
  //   let res = await fetch("https://fakestoreapi.com/products");
  //   let json = await res.json();
  //   setProducts(json);
  // };
  useEffect(() => {
    dispatch(fetchProducts());
    //productList();
  }, []);
  console.log(products);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>LOADING.............</h2>;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="350px"
      gap="20px"
      margin="10px"
    >
      {products.map((product) => {
        return (
          <Box
            gridColumn="span 2"
            key={product.id}
            sx={{ border: "1px solid black", p: 5 }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={product.image} alt={product.image} width="70px" />
              <Typography variant="subtitle4">{product.title}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Button variant="contained" onClick={() => handleAdd(product)}>
                Add Cart
              </Button>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default Product;
