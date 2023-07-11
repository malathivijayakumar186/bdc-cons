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
  
      <div style={{ display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div className={style.navtop} >
        <img src={logo} className={style.logoimg} />
       
        <MdOutlineMenu className={style.menuicon} onClick={ Menulist }/>
 

 </div>
 
{menulist && (
    <div>
     <List   className={style.navright}>
     
     <ListItem role="none" style={{width:"11% !important"}}>
       <ListItemButton
         role="menuitem"  className={style.ListItem1} onClick={onClose} 
       >
       HOME
       </ListItemButton>
     </ListItem>
   
         
     <ListItem role="none" style={{width:"16% !important"}}>
       <Button  id="basic-button"
     aria-controls={open ? 'basic-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={open ? 'true' : undefined}
     onClick={handleMenuClick}
     className={style.ListItem}
     >
    
        Company
        <ArrowDropDownIcon />

       </Button>
     </ListItem>
    
     <Menu
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
    
   </Menu>
  
   <ListItem role="none"  style={{width:"14% !important"}}>
       <Button  id="basic-button"
     aria-controls={opens ? 'basic-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={opens ? 'true' : undefined}
       onClick={handleMenuClick1}
       className={style.ListItem}
        >
    
        Services
        <ArrowDropDownIcon />

       </Button>
     </ListItem>
     <Menu
     id="basic-menu"
     anchorEl={anchorEl1}
     open={opens}
     onClose={handleMenuClose1}
     MenuListProps={{
       'aria-labelledby': 'basic-button',
     }}
   >
     <MenuItem onClick={handleMenuClose1}className={style.menuitem}>Construction,Design & Build</MenuItem>
     <MenuItem onClick={handleMenuClose1}className={style.menuitem}>Renovations,Additions & Alteration</MenuItem>
     <MenuItem onClick={handleMenuClose1}className={style.menuitem}>Aluminium & Glazing Works</MenuItem>
     <MenuItem onClick={handleMenuClose1}className={style.menuitem}>Metal Roofing</MenuItem>
     <MenuItem onClick={handleMenuClose1}className={style.menuitem}>Plumbing & Electrical Services</MenuItem>
     <MenuItem onClick={handleMenuClose1}className={style.menuitem}>Marble Collection For Sale</MenuItem>

   </Menu>
   <ListItem role="none"  style={{width:"17% !important"}} >
       <Button  id="basic-button"
     aria-controls={opening ? 'basic-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={opening ? 'true' : undefined}
     onClick={handleMenuClick2}
     className={style.ListItem}>
    
        Properties
        <ArrowDropDownIcon />

       </Button>
     </ListItem>
     <Menu
     id="basic-menu"
     anchorEl={anchorEl2}
     open={opening}
     onClose={handleMenuClose2}
     MenuListProps={{
       'aria-labelledby': 'basic-button',
     }}
   >
     <MenuItem onClick={handleMenuClose2}className={style.menuitem}>For Sale</MenuItem>
     <MenuItem onClick={handleMenuClose2}className={style.menuitem}> Under Construction</MenuItem>
     <MenuItem onClick={handleMenuClose2}className={style.menuitem}>Completed</MenuItem>
   </Menu>
     
     <ListItem role="none"  style={{width:"12% !important"}}>
       <ListItemButton className={style.ListItem1} role="menuitem" component="a" href="#horizontal-list">
       INSIGHTS
       </ListItemButton>
     </ListItem>

     <ListItem role="none"  style={{width:"22% !important"}}>
       <ListItemButton className={style.ListItem2} role="menuitem" component="a" href="#horizontal-list" >
      CONDUCT US
       </ListItemButton>
     </ListItem>

     
   </List>
 </div>
 )}
      </div>

  );
};

export default Mobileview;
