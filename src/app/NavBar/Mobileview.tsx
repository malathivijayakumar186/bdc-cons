import { logo } from "@/config/AssetConstants";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import style from "./navbar.module.sass";
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from '@mui/material/Button';
import { Drawer } from "@mui/material";
import NavBar from ".";

const Mobileview = () => {

 

  const [anchorEl3, setAnchorEl3] = useState(null);
    const OnMenuClick = (e:any) => {
        // setAnchorEl(e.currentTarget);
        if (anchorEl3 !== e.currentTarget) {
          setAnchorEl3(e.currentTarget);
        }
      };
      const OnMenuClose = () => {
        setAnchorEl3(null);
        // props.onClick();
      };
  const open1 = Boolean(anchorEl3); 
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

 
  const open = Boolean(anchorEl);
  const handleMenuClick = (e:any) => {
    // setAnchorEl(e.currentTarget);
    if (anchorEl !== e.currentTarget) {
      setAnchorEl(e.currentTarget);
    }
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    // props.onClick();
  };

 
  const opens = Boolean(anchorEl1);
  const handleMenuClick1 = (e:any) => {
    // setAnchorEl(e.currentTarget);
    if (anchorEl1 !== e.currentTarget) {
      setAnchorEl1(e.currentTarget);
    }
  };
  const handleMenuClose1 = () => {
    setAnchorEl1(null);
    // props.onClick();
  };


  const opening = Boolean(anchorEl2); 
  const handleMenuClick2 = (e:any) => {
    // setAnchorEl(e.currentTarget);
    if (anchorEl2 !== e.currentTarget) {
      setAnchorEl2(e.currentTarget);
    }
  };
  const handleMenuClose2 = () => {
    setAnchorEl2(null);
    // props.onClick();
  };
  

  
  const [menulist,setMenulist] = useState(false);

  const Menulist =()=>{
    setMenulist(true)
  }
  const onClose =()=>{
    setMenulist(false)
  }
  
  return (
  
      <div style={{ display:"flex",flexDirection:"column"}}>
        <div className={style.navtop} >
        <img src={logo} className={style.logoimg} />
       
        <MdOutlineMenu className={style.menuicon} onClick={ Menulist }/>
 

 </div>
 
{menulist && (
    <div>
  <div onClick={onClose}>wertyui</div>
  <div onClick={onClose}>wertasdytfuhoyui</div>
 </div>
 )}
      </div>

  );
};

export default Mobileview;
