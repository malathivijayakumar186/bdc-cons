import useAppRoutes from '@/hooks/useAppRoutes'
import React from 'react'

const HomePage = () => {
    const {Home1} = useAppRoutes();
  return (
    <div>HomePage
        <div onClick={() => Home1()} style={{margin:"10%"}}>
    rfdycygfoiuyttioplkjhgfdsazvbbnmnbvcxzasdfghjklpoiuytrewq
  </div>
    </div>
  )
}

export default HomePage