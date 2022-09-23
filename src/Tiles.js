import React from 'react'
import Tile from './Tile'

export default function Tiles({dimensions, resetBtnClicked, nextBtnClicked}) {

  return (
    <div className="tiles centre">
      <Tile dimensions={dimensions} resetBtnClicked={resetBtnClicked} nextBtnClicked={nextBtnClicked} />
    </div>
  )
}
