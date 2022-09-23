import React from 'react'

export default function Buttons({resetBtnClicked, setResetBtnClicked, nextBtnClicked, setNextBtnClicked}) {

  const resetTiles = () => {
    setResetBtnClicked(resetBtnClicked ? false : true)
  }

  const nextBtnClick = () => {
    setNextBtnClicked(nextBtnClicked ? false : true)
  }

  return (
    <div className="buttons-container centre">
        <button id="start-btn" className="button">Start</button>
        <button id="stop-btn" className="button">Stop</button>
        <button id="next-btn" className="button" onClick={() => {nextBtnClick()}}>Next</button>
        <button id="reset-btn" className="button" onClick={() => {resetTiles()}}>Reset</button>
    </div>
  )
}
