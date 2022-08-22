import React from 'react'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'
import Products from '../../components/Products/Products'
import { homeObjFour, homeObjOne, homeObjTthree, homeObjTwo } from './Data'

const Home = () => {
  return (
    <>
        <InfoSection {...homeObjOne}/>
        <Products/>
        <Pricing/>
        
    </>
  )
}

export default Home