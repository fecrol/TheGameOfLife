import React from 'react'
import Header from "./Header"
import Body from "./Body"
import Buttons from './Buttons'
import Footer from "./Footer"

export default function Home() {

  return (
    <div className="main-container centre">
        <Header />
        <Body />
        <Buttons />
        <Footer />
    </div>
  )
}
