import {
  homeimg,
  homeimg1,
  homeimg11,
  homeimg2,
  homeimg3,
  homeimg4,
  homeimg5,
  homeimg6,
  homevideo,
} from "@/config/AssetConstants";
import useAppRoutes from "@/hooks/useAppRoutes";
import { useState, useRef } from "react";
import React from "react";
import style from "./homepage.module.sass";
import { IoIosArrowForward } from "react-icons/io";
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
        <Fade direction="up" duration={1300}>
          <div className={style.homehead1}>
            Bespoke Landed Homes Developer & Builder of Holistic, Inspiring
            Properties
          </div>
        </Fade>
        <Fade direction="up" delay={1000} duration={1300}>
          <div className={style.subhead}>
            <div className={style.subhead1}>Property Development</div>
            <div className={style.subhead2}>
              Construction, Design & Build & More
            </div>
            <div className={style.subhead3}>Property Maintenance</div>
          </div>
        </Fade>
      </div>

      <div className={style.homepart}>
        <Fade direction="left" duration={1300}>
          <div className={style.homepart1}>
            <img src={homeimg1} className={style.homeimg1} />
            <div className={style.headtext1}>
              <div className={style.headtext12}>
                To improve lives for the better, this is our goal at BDC .
              </div>

              <div className={style.headtext13}>
                Keeping in mind your needs and desires, we strive to make our
                homes family-centric for multi-generational living. We hope to
                play a part in fostering stronger family connections to be
                availed at your new home through our work, the relationships
                that we continue to build and the legacy that you will be
                leaving behind.
              </div>
            </div>
          </div>
        </Fade>

        <div className={style.homeimg11}>
          <Fade direction="right" duration={1300}>
            <img src={homeimg11} className={style.hmimg11} />{" "}
            <div className={style.headtext14}>
              "Commit thy works to Lord and thy thoughts shall be established"
            </div>
            <div className={style.headtext15}> - Proverbs 16:3</div>{" "}
          </Fade>
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
          <Fade direction="left" duration={1500}>
            <div style={{ padding: "8px 80px", paddingLeft: "100px" }}>
              <div className={style.text21}> WHAT WE DO</div>
              <div className={style.text22}>PROPERTY DEVELOPMENT</div>
              <div className={style.text23}>
                Our homes are made to feel exclusive only to you. We believe
                that modern luxury isn’t about what you have, but rather who you
                are and aspire to be.
              </div>
              <div className={style.text24}>
                As curators in this field and purveyors of landed homes, here is
                where you get to live the life you have always dreamed of. Each
                of our homes encompasses a balance of functional design and
                unique features. Say no more and discover your next abode.
              </div>
              <div className={style.text25}>Our Properties</div>

              <div className={style.text26}>
                <IoIosArrowForward className={style.greaticon} />
                For Sale
              </div>
              <div className={style.text26}>
                <IoIosArrowForward className={style.greaticon} /> Under
                Construction
              </div>
              <div className={style.text26}>
                <IoIosArrowForward className={style.greaticon} />
                Completed
              </div>
            </div>
          </Fade>
        </div>
        <div className={homeimg2}>
          <Fade direction="right" duration={1500}>
            <div className="pattern-dots-md text-grey">
              <img src={homeimg2} className={style.homeimg21} />
            </div>
          </Fade>
        </div>
      </div>

      <div className={style.hometext2}>
        <div className={homeimg2}>
          <Fade direction="left" duration={1500}>
            <div className="pattern-dots-md text-grey">
              <img src={homeimg3} className={style.homeimg21} />
            </div>
          </Fade>
        </div>
        <div className={style.hometext21}>
          <Fade direction="right" duration={1500}>
            <div style={{ padding: "8px 80px", paddingLeft: "100px" }}>
              <div className={style.text21}> OUR SERVICES</div>
              <div className={style.text22}>CONSTRUCTION, DESIGN & BUILD</div>
              <div className={style.text23}>
                Building or rebuilding your home is a lengthy and challenging
                task which involves coordinating with multiple parties, and if
                not managed well, can be stressful. Making big and small
                decisions, stumbling upon unforeseen circumstances leading to
                potential pushbacks of project timelines may be some hurdles
                that come with this process.
              </div>
              <div className={style.text24}>
                At Arsea, we seek to streamline the various processes and aim to
                help make building your dream home a seamless and exciting
                experience.
              </div>
              <div className={style.text25}>Other Services that We Provide</div>

              <div className={style.text26}>
                <IoIosArrowForward className={style.greaticon} />
                Renovations, Additions & Alterations
              </div>
              <div className={style.text26}>
                <IoIosArrowForward className={style.greaticon} />
                Under Aluminium & Glazing Works
              </div>
              <div className={style.text26}>
                <IoIosArrowForward className={style.greaticon} />
                Metal Roofing
              </div>
              <div className={style.text26}>
                <IoIosArrowForward className={style.greaticon} />
                Plumbing & Electrical Services
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className={style.hometext2}>
        <div className={style.hometext21}>
          <Fade direction="left" duration={1500}>
            <div style={{ padding: "8px 80px", paddingLeft: "100px" }}>
              <div className={style.text21}>OUR SERVICES</div>
              <div className={style.text22}>PROPERTY MAINTENANCE</div>
              <div className={style.text23}>
              Whether you want to refresh your property with a fresh coat of paint, or you need a complete overhaul, we have the team in place to manage all of this for you. We regularly provide repair and renovation services.
              </div>
              {/* <div className={style.text24}>
                As curators in this field and purveyors of landed homes, here is
                where you get to live the life you have always dreamed of. Each
                of our homes encompasses a balance of functional design and
                unique features. Say no more and discover your next abode.
              </div> */}
              <div className={style.text25}>Services include</div>

              <div className={style.text27}>
                <IoIosArrowForward className={style.greaticon} />
                Interior and exterior painting
              </div>
              <div className={style.text27}>
                <IoIosArrowForward className={style.greaticon} />Under
                Refurbishment of kitchens and bathrooms
              </div>
              <div className={style.text27}>
                <IoIosArrowForward className={style.greaticon} />
                Electrical & plumbing services
              </div>
              <div className={style.text27}>
                <IoIosArrowForward className={style.greaticon} />
                Installation of lightning protection systems
              </div>
              <div className={style.text27}>
                <IoIosArrowForward className={style.greaticon} />
                Waterproofing
              </div>
              <div className={style.text27}>
                <IoIosArrowForward className={style.greaticon} />
                Marble and Tile laying
              </div>
              <div className={style.text27}>
                <IoIosArrowForward className={style.greaticon} />
                Timber and chain-linked fencing
              </div>
            </div>
          </Fade>
        </div>
        <div className={homeimg2}>
          <Fade direction="right" duration={1500}>
            <div className="pattern-dots-md text-grey">
              <img src={homeimg4} className={style.homeimg21} />
            </div>
          </Fade>
        </div>
      </div>

      <div className={style.hometext2}>
        <div className={homeimg2}>
          <Fade direction="left" duration={1500}>
            <div className="pattern-dots-md text-grey">
              <img src={homeimg6} className={style.homeimg21} />
            </div>
          </Fade>
        </div>
        <div className={style.hometext21}>
          <Fade direction="right" duration={1500}>
            <div style={{ padding: "8px 80px", paddingLeft: "100px" }}>
              <div className={style.text21}> OUR SERVICES</div>
              <div className={style.text22}>MARBLE COLLECTION FOR SALE</div>
              <div className={style.text23}>
              At Arsea, we have laid various flooring types for our clients and our own properties ranging from the luxe marble, travertine, granite, homogenous tiles, the warm parquet to the edgy cement screed, among others.
              </div>
              <div className={style.text24}>
              From our projects, we have found that despite the higher price tag and regular maintenance required, marble remains an evergreen popular choice for use in the living, dining and bathrooms (and even for the walls)!
              </div>
              <div className={style.text24}>
              We have a small collection of marble types which we believe are versatile, and highly adaptable to match any home décor designs that you may be considering.
              </div>
              <div className={style.text28}><u>View Marble Collection</u></div>            
            </div>
          </Fade>
        </div>
      </div>

      


      <div className={style.homepart}>
        <Fade direction="left" duration={1300}>
          <div className={style.homepart1}>
            <img src={homeimg1} className={style.homeimg1} />
            <div className={style.headtext1}>
              <div className={style.headtext12}>
                To improve lives for the better, this is our goal at BDC .
              </div>

              <div className={style.headtext13}>
                Keeping in mind your needs and desires, we strive to make our
                homes family-centric for multi-generational living. We hope to
                play a part in fostering stronger family connections to be
                availed at your new home through our work, the relationships
                that we continue to build and the legacy that you will be
                leaving behind.
              </div>
            </div>
          </div>
        </Fade>

        <div className={style.homeimg11}>
          <Fade direction="right" duration={1300}>
            <img src={homeimg11} className={style.hmimg11} />{" "}
            <div className={style.headtext14}>
              "Commit thy works to Lord and thy thoughts shall be established"
            </div>
            <div className={style.headtext15}> - Proverbs 16:3</div>{" "}
          </Fade>
        </div>
      </div>


    </div>
  );
};

export default HomePage;
