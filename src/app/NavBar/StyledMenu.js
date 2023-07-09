import React from "react";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: " rgb(55, 65, 81)",
    border: "1px solid #d1d9e6",
    // boxShadow: "6px 6px 12px #b8b9be, -6px -6px 12px #F3F0F1",
    // boxShadow:
    //   "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        // fontSize: 18,
        // color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:hover": {
        // m: 1,
        boxShadow:
          "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
      },
    },
  },
}));
export default StyledMenu;
