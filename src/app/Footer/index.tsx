
import Box from "@mui/material/Box";
import React from "react";
import classes from "./Footer.module.sass";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from "next/router";
import { logo } from "@/config/AssetConstants";

const Footer = () => {
 
  const router = useRouter();


  return (
    <Box className={router.pathname == "/" ? classes.root : classes.root1 }>
      <Box className={classes.contentSection}>
        <Box className={classes.imgtext}>
          <img
            src={logo}
            alt=""
            className={classes.logoImg}
          
          />
          <span className={router.pathname == "/" ?classes.subtext:classes.subtext1}>
            GET THE EMAIL NEWSLETTER AND UNLOCK ACCESS TO MEMBERS-ONLY CONTENT
            AND UPDATES
          </span>
          <div className={classes.socialicons}>
            {/* <LinkedInIcon />
            <AiFillInstagram />
            <BsFacebook />
            <BsTwitter />
            <ImYoutube /> */}
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
          <Box sx={{ width: "118px" }}>
            <div className={router.pathname == "/" ?classes.heading:classes.heading1 }>Company</div>
            <div className={router.pathname == "/" ?classes.footertext:classes.footertext1}>About us</div>
            <div className={router.pathname == "/" ?classes.footertext:classes.footertext1}>How it works</div>
            <div className={router.pathname == "/" ?classes.footertext:classes.footertext1}>Contact us</div>
          </Box>
          <Box>
            <div className={router.pathname == "/" ?classes.heading:classes.heading1}>Get in Touch</div>
            <div className={router.pathname == "/" ?classes.footertext:classes.footertext1}>
              <LocationOnIcon className={router.pathname == "/" ?classes.icons:classes.icons1} />
              Contact us
            </div>
            <div className={router.pathname == "/" ?classes.footertext:classes.footertext1}>
              <WhatsAppIcon className={router.pathname == "/" ?classes.icons:classes.icons1}/>
              +123456789
            </div>
            <div className={router.pathname == "/" ?classes.footertext:classes.footertext1}>
              <MailIcon className={router.pathname == "/" ?classes.icons:classes.icons1} />
              test@gmail.com
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
