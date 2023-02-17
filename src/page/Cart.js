import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const despatch = useDispatch();
  const selector = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    despatch(remove(id));
  };
  return (
    <Box sx={{ marginTop: 15 }}>
      <Header title="CART LIST" />
      <Box>
        {selector.map((product) => {
          return (
            <Box
            key={product.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "30px",
                margin: "10px",
                border: "1px solid black",
                p: "10px",
              }}
            >
              <img src={product.image} alt="" width="60px" />
              <Typography>{product.title}</Typography>
              <Typography>{product.price}</Typography>
              <Button
                variant="contained"
                onClick={() => handleRemove(product.id)}
              >
                remove
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Cart;
