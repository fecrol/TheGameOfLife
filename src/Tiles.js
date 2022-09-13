import React, {useState, useEffect, useRef} from 'react'
import Tile from './Tile'

export default function Tiles({dimensions}) {

  return (
    <div className="tiles centre">
      <Tile dimensions={dimensions} />
    </div>
  )
}
