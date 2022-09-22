import React, {useState} from 'react'
import Header from "./Header"
import Body from "./Body"
import Buttons from './Buttons'
import Footer from "./Footer"

export default function Home() {

  const [resetBtnClicked, setResetBtnClicked] = useState(false)

  return (
    <div className="main-container centre">
        <Header />
        <Body resetBtnClicked={resetBtnClicked} />
        <Buttons resetBtnClicked={resetBtnClicked} setResetBtnClicked={setResetBtnClicked} />
        <Footer />
    </div>
  )
}
