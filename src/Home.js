import React, {useState, useRef} from 'react'
import Header from "./Header"
import Body from "./Body"
import Buttons from './Buttons'
import Footer from "./Footer"

export default function Home() {

  const [resetBtnClicked, setResetBtnClicked] = useState(false)
  const [nextBtnClicked, setNextBtnClicked] = useState(false)
  const [playing, setPlaying] = useState(false)
  const running = useRef(false)

  return (
    <div className="main-container centre">
        <Header />
        <Body resetBtnClicked={resetBtnClicked} nextBtnClicked={nextBtnClicked} playing={playing} setPlaying={setPlaying} running={running} />
        <Buttons resetBtnClicked={resetBtnClicked} setResetBtnClicked={setResetBtnClicked} nextBtnClicked={nextBtnClicked} setNextBtnClicked={setNextBtnClicked} setPlaying={setPlaying} running={running} />
        <Footer />
    </div>
  )
}
