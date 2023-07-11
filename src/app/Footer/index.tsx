
import Box from "@mui/material/Box";
import React from "react";
import classes from "./Footer.module.sass";
import {BsFillFileEarmarkTextFill} from "react-icons/bs";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from "next/router";
import { logo, logo1 } from "@/config/AssetConstants";
import {AiFillInstagram} from "react-icons/ai";
import {BsFacebook,BsTwitter} from "react-icons/bs";
import {ImYoutube} from "react-icons/im";


const Footer = () => {
 
  const router = useRouter();


  return (
    <Box className={classes.root}>
      <Box className={classes.contentSection}>
        <Box className={classes.imgtext}>
          <img
            src={logo}
            alt=""
            className={classes.logoImg}
          
          />
          <span className={classes.subtext}>
          BDC construction , a bespoke landed homes developer & builder of holistic, inspiring properties for multi-generational living under one roof.


          </span>
          <div className={classes.socialicons}>
            <LinkedInIcon />
            <AiFillInstagram />
            <BsFacebook />
            <BsTwitter />
            <ImYoutube />
          </div>
        </Box>
        {/* <div className={classes.copyRight}>
          ©Copyright 2023 <span style={{ color: '#e9a533' }}>flexi</span>
          <span>Props</span> All Rights Reserved
        </div> */}

        {/* <div className={classes.foot}>
          <img src={Logo} alt=""  style={{ width: "70px" }}/>
          <div className={classes.heading1}>Event Direct</div>
        </div> */}
        <Box className={classes.links}>
        <Box className={classes.links1} >
            <div className={classes.heading }>SERVICES</div>
            <div className={classes.footertext}>Construction, Design & Build</div>
            <div className={classes.footertext}>Renovations, Additions & Alterations</div>
            <div className={classes.footertext}>Aluminium & Glazing</div>
            <div className={classes.footertext}>Metal Roofing</div>
            <div className={classes.footertext}>Plumbing & Electrical</div>
            <div className={classes.footertext}>Marble Collection For Sale</div>
          </Box>
          <Box  className={classes.links2}>
         <div className={classes.heading }>PROPERTIES</div>
            <div className={classes.footertext}>For Sale</div>
            <div className={classes.footertext}>Under Construction</div>
            <div className={classes.footertext}>Completed Projects</div>
          </Box>
          <Box className={classes.links3} >
            <div className={classes.heading }>COMPANY</div>
            <div className={classes.footertext}>Who We Are</div>
            <div className={classes.footertext}>Our Process</div>
            <div className={classes.footertext}>Become a Business Partner</div>
            <div className={classes.footertext}>Insights</div>
          </Box>
          <Box className={classes.links4}>
            <div className={classes.heading}>CONTACT US</div>
           
            <div className={classes.footertext}>
              <WhatsAppIcon className={classes.icons}/>
              WhatsApp Us

            </div>
            <div className={classes.footertext}>
              <MailIcon className={classes.icons} />
              Email Us

            </div>
            <div className={classes.footertext}>
              <BsFillFileEarmarkTextFill className={classes.icons} />
              Online Form
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
