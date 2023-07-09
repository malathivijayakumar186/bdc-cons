import React from 'react';
import style from './navbar.module.sass'
import "./index.css"
import { logo, logo1 } from '@/config/AssetConstants';
import { sub, sub2 } from "./Data";
import MenuItem from "@mui/material/MenuItem";
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StyledMenu from "./StyledMenu";

const NavBar = () => {
  



  return (

    <div className={style.top}>
    <img src={logo1} className={style.logoimg}/>



    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
      {/* className={({ isActive }) => (isActive ?style.button : style.button1)} */}
        <ListItem role="none" >
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
            <Home /> Home
          </ListItemButton>
        </ListItem>
      
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
          <ListItemText
              primary="Service"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
            <ArrowDropDownIcon />
           Commpany
          </ListItemButton>
        </ListItem>
        <StyledMenu
          id="simple-menu"
          keepMounted
          // anchorEl={anchorEl}
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: "left",
          // }}
          // open={Boolean(anchorEl)}
          // onClose={handleMenuClose}
          // MenuListProps={{ onMouseLeave: handleMenuClose }}
          // disableRestoreFocus
          // onClick={props.onClick}
        >
          {sub.map((item, i) => (
            <MenuItem
              // onClick={() => {
              //   handleMenuClose();
              //   props.onClick;
              // }}
              // onClick={() => {
              //   handleMenuClose();
              //   handlePropClick();
              // }}
              // component={Link}
              // to={item.link}
              key={i}
            >
              {item.title}
            </MenuItem>
          ))}
        </StyledMenu>
      
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
          Services
          </ListItemButton>
        </ListItem>

        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
         Insights
          </ListItemButton>
        </ListItem>

        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
         Conduct us
          </ListItemButton>
        </ListItem>

        
      </List>
    </Box>    
    </div>
  )
}
export default NavBar