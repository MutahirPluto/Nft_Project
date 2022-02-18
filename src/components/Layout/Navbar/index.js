import React from 'react'
import PureNavbar from "./PureNavbar";
import Footer from "../../Footer/Footer"

const Index = ({children}) => {
  return (
    <div  >
       <PureNavbar  />
    {children}
    <Footer />
    </div>
  )
}

export default Index