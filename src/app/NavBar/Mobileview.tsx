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


    
  return (
  
      <div className={style.navtop}>
        <img src={logo} className={style.logoimg} />
        <MdOutlineMenu className={style.menuicon} onClick={OnMenuClick}  id="basic-button"
        aria-controls={open1 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined} />

<Menu
        id="basic-menu"
        anchorEl={anchorEl3}
        open={open1}
        onClose={OnMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={OnMenuClose} className={style.menuitem}> <ListItemButton
            role="menuitem"  className={style.ListItem1}
          >
          HOME
          </ListItemButton></MenuItem>


        <MenuItem  className={style.menuitem}>  <Button  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuClick}
        className={style.ListItem}
        >
       
           Company
           <ArrowDropDownIcon />

          </Button>  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleMenuClose} className={style.menuitem}>Who We Are</MenuItem>
        <MenuItem onClick={handleMenuClose} className={style.menuitem}>Our Process</MenuItem>
        <MenuItem onClick={handleMenuClose} className={style.menuitem}>Become a Business arter</MenuItem>
       
      </Menu></MenuItem>




        <MenuItem onClick={OnMenuClose} className={style.menuitem}>Become a Business arter</MenuItem>
       
      </Menu>




      </div>

  );
};

export default Mobileview;
