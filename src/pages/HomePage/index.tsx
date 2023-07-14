import {
  homeimg,
  homeimg1,
  homeimg11,
  homeimg2,
  homevideo,
} from "@/config/AssetConstants";
import useAppRoutes from "@/hooks/useAppRoutes";
import { useState, useRef } from "react";
import React from "react";
import style from "./homepage.module.sass";
import { Divider } from "@mui/material";
import ReactPlayer from "react-player";
import VideoPlayerButton from "./VideoPlayerButton";
import {IoIosArrowForward} from "react-icons/io";
import "../../Layouts/globals.css";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
  const { Home1 } = useAppRoutes();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // const handlePlayPause = () => {
  //   const video = videoRef.current;
  //   if (isPlaying) {
  //     video.pause();
  //   } else {
  //     video.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div>
      {/* <video  autoPlay loop muted className={style.homevideo}>
        <source src='/Images/homevideo.mp4' type="video/mp4" />
      </video>  */}

      <img className={style.homeimg} src={homeimg} />

      <div className={style.homehead}>
        <div className={style.homehead1}>
          Bespoke Landed Homes Developer & Builder of Holistic, Inspiring
          Properties
        </div>
        <div className={style.subhead}>
          <div className={style.subhead1}>Property Development</div>
          <div className={style.subhead2}>
            Construction, Design & Build & More
          </div>
          <div className={style.subhead3}>Property Maintenance</div>
        </div>
      </div>

      <div className={style.homepart}>
        <div className={style.homepart1}>
          <img src={homeimg1} className={style.homeimg1} />
          <div className={style.headtext1}>
            <div className={style.headtext12}>To improve lives for the better, this is our goal at BDC .</div>
            
          <div className={style.headtext13}>Keeping in mind your needs and desires, we strive to make our homes family-centric for multi-generational living. We hope to play a part in fostering stronger family connections to be availed at your new home through our work, the relationships that we continue to build and the legacy that you will be leaving behind.</div>
          </div>
        </div>
        <div className={style.homeimg11}>
          <img src={homeimg11} className={style.hmimg11} />{" "}
          <div className={style.headtext14}>"Commits thy works to the Lord and thy thoughts shall be established" </div>
        </div>
      </div>

      <div>
        <video controls className={style.homevideo}>
          <source src="/Images/homevideo.mp4" type="video/mp4" />
          {/* <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button> */}
        </video>
      </div>

      <div className={style.hometext2}>
        <div className={style.hometext21}>
      <Fade direction="left" duration={1300}>

          <div style={{ padding: "40px 80px", paddingLeft: "100px" }}>
            <div className={style.text21}> WHAT WE DO</div>
            <div className={style.text22}>PROPERTY DEVELOPMENT</div>
            <div className={style.text23}>
              Our homes are made to feel exclusive only to you. We believe that
              modern luxury isn’t about what you have, but rather who you are
              and aspire to be.
            </div>
            <div className={style.text24}>
              As curators in this field and purveyors of landed homes, here is
              where you get to live the life you have always dreamed of. Each of
              our homes encompasses a balance of functional design and unique
              features. Say no more and discover your next abode.
            </div>
            <div className={style.text25}>
            Our Properties
            </div>

            <div className={style.text26}><IoIosArrowForward className={style.greaticon}/>For Sale</div>
<div className={style.text26}><IoIosArrowForward className={style.greaticon}/> Under Construction</div>
<div className={style.text26}><IoIosArrowForward className={style.greaticon}/>Completed</div>

          </div>
        </Fade>

        </div>
        <div className={homeimg2}>
      <Fade direction="right"  duration={1300}>

        <div className="pattern-dots-md text-grey" >
          <img src={homeimg2} className={style.homeimg21} />
       </div>
       </Fade>
        </div>

      </div>

      





    </div>
  );
};

export default HomePage;
