import { Box, IconButton, Link, Fab } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const selector = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#99aef7",
        p: 2,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: " 9999",
        width: "100%",
      }}
    >
      <Box>
        <Link
          href="/"
          underline="none"
          variant="h4"
          sx={{ text: "bold", color: "black", fontWeight: 800 }}
        >
          SHOP
        </Link>
      </Box>

      <Box sx={{ display: "flex", marginRight: 5 }}>
        <Box
          display="flex"
          backgroundColor="#ced6f5"
          border="1px solid"
          borderRadius="3px"
          marginRight="10px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <IconButton onClick={() => navigate("/cart")}>
          <ShoppingCartIcon sx={{ position: "relative", color: "black" }} />
          <div className="cart-number">{selector.length}</div>
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon sx={{ color: "black" }} />
        </IconButton>

        <Fab size="small" color="primary" aria-label="add">
          <PersonOutlinedIcon sx={{ color: "black" }} />
        </Fab>
      </Box>
    </Box>
  );
};

export default Navbar;
