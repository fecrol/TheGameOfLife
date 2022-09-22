import React, {useState, useEffect} from 'react'

export default function Tile({dimensions, resetBtnClicked}) {
    
  const [tilesArr, setTilesArr] = useState([])
  const [clicker, setClicker] = useState(false)

  const tileSize = 16
  const numOfRows = Math.floor(dimensions.height / tileSize)
  const numOfColumns = Math.floor(dimensions.width / tileSize)

  useEffect(() => {
    const tiles = generateTiles()
    setTilesArr([...tiles])
  }, [numOfColumns, numOfRows])

  useEffect(() => {
    
    resetTiles()
    setClicker(clicker ? false : true)
  }, [resetBtnClicked])
  
  const generateTiles = () => {

    const tiles = []
    let key = 0
    
    for(let y = 0; y < numOfRows; y++) {

      for(let x = 0; x < numOfColumns; x++) {

        const tile = {
          x,
          y,
          active: false,
          key: `tile${key}`
        }

        key++
        tiles.push(tile)
      }
    }

    return tiles
  }

  const resetTiles = () => {

    const tiles = tilesArr

    if(tiles[0] != undefined) {
      tiles.forEach((tile) => {
        if(tile.active) {
          tile.active = false
        }
      })
    }
  }

  const toggleTile = (tile) => {

    tile.active = tile.active ? false : true
    setClicker(clicker ? false : true)
  }
  
  return (

    tilesArr.map((tile) => {
      return <div key={tile.key} className={`tile ${tile.active ? "active" : "inactive"}`} style={{width: tileSize + "px", height: tileSize + "px"}} onClick={() => {toggleTile(tile)}}></div>
    })
  )
}
