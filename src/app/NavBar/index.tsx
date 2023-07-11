import React, { useState } from "react";
import style from "./navbar.module.sass";
import { Theme, useMediaQuery } from "@mui/material";
import Mobileview from "./Mobileview";
import Desktopview from "./Desktopview";

const NavBar = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <>
      {isMobile ? <Mobileview /> : <Desktopview />}
    </>
  );
};
export default NavBar;
