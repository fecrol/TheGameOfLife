import React from 'react'
import Tile from './Tile'

export default function Tiles({dimensions, resetBtnClicked, nextBtnClicked, playing, setPlaying, running}) {

  return (
    <div className="tiles centre">
      <Tile dimensions={dimensions} resetBtnClicked={resetBtnClicked} nextBtnClicked={nextBtnClicked} playing={playing} setPlaying={setPlaying} running={running} />
    </div>
  )
}
