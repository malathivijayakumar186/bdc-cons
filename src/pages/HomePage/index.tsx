import { homevideo } from '@/config/AssetConstants';
import useAppRoutes from '@/hooks/useAppRoutes'
import React from 'react'
import style from './homepage.module.sass'
const HomePage = () => {
    const {Home1} = useAppRoutes();
  return (
    <div>
      
      <video  autoPlay loop muted className={style.homevideo}>
        <source src='/Images/homevideo.mp4' type="video/mp4" />
      </video>
      
 
        <div onClick={() => Home1()} style={{margin:"10%"}}>
    rfdycygfoiuyttioplkjhgfdsazvbbnmnbvcxzasdfghjklpoiuytrewq
  </div>
    </div>
  )
}

export default HomePage