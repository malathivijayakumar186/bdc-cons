import { homeimg, homevideo } from '@/config/AssetConstants';
import useAppRoutes from '@/hooks/useAppRoutes'
import React from 'react'
import style from './homepage.module.sass'
import { Divider } from '@mui/material';
const HomePage = () => {
    const {Home1} = useAppRoutes();
  return (
    <div>
      
      {/* <video  autoPlay loop muted className={style.homevideo}>
        <source src='/Images/homevideo.mp4' type="video/mp4" />
      </video>  */}

<img  className={style.homeimg} src={homeimg}/>

        <div className={style.homehead}>
          <div className={style.homehead1}>
        Bespoke Landed Homes Developer & Builder of Holistic, Inspiring Properties
        </div>
        <div className={style.subhead}>
          <div className={style.subhead1}>
            Property Development
          </div>
      
          <div className={style.subhead2}>

            Construction, Design & Build & More 
          </div>
          

          <div className={style.subhead3}>

          Property Maintenance
          </div>
        

        </div>
        
        </div>
    </div>
  )
}

export default HomePage