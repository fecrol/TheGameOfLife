import React, {useRef} from 'react'

export default function Buttons({resetBtnClicked, setResetBtnClicked, nextBtnClicked, setNextBtnClicked, setPlaying, running}) {

  const startBtn = useRef()
  
  const resetTiles = () => {
    startBtn.current.innerText = "Start"
    running.current = false
    setPlaying(false)
    setResetBtnClicked(resetBtnClicked ? false : true)
  }

  const nextBtnClick = () => {
    startBtn.current.innerText = "Start"
    running.current = false
    setPlaying(false)
    setNextBtnClicked(nextBtnClicked ? false : true)
  }

  const startBtnClick = () => {
    if(!running.current) {
      startBtn.current.innerText = "Playing..."
      running.current = true
      setPlaying(true)
    }
  }

  const stopBtnClick = () => {
    startBtn.current.innerText = "Start"
    running.current = false
    setPlaying(false)
  }

  return (
    <div className="buttons-container centre">
        <button id="start-btn" className="button" ref={startBtn} onClick={() => {startBtnClick()}}>Start</button>
        <button id="stop-btn" className="button" onClick={() => {stopBtnClick()}}>Stop</button>
        <button id="next-btn" className="button" onClick={() => {nextBtnClick()}}>Next</button>
        <button id="reset-btn" className="button" onClick={() => {resetTiles()}}>Reset</button>
    </div>
  )
}
