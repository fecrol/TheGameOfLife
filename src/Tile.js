import React, {useState, useEffect} from 'react'

export default function Tile({dimensions, resetBtnClicked, nextBtnClicked}) {
    
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

  useEffect(() => {
    changeTileState()
  }, [nextBtnClicked])
  
  const generateTiles = () => {

    const tiles = []
    let key = 0
    
    for(let y = 0; y < numOfRows; y++) {

      const row = []

      for(let x = 0; x < numOfColumns; x++) {

        const tile = {
          x,
          y,
          active: false,
          key: `tile${key}`
        }

        key++
        row.push(tile)
      }
      
      tiles.push(row)
    }

    return tiles
  }

  const resetTiles = () => {

    const tiles = tilesArr

    if(tiles[0] != undefined) {
      tiles.forEach((row) => {
        row.forEach((tile) => {
          if(tile.active) {
            tile.active = false
          }
        })
      })
    }
  }

  const changeTileState = () => {

    const currentTiles = tilesArr
    const updatedStateTiles = tilesArr

    let updateTileState = false
    let numOfAdjacentActiveTiles = 0

    for(let i = 0; i < numOfColumns; i++) {
      for(let x = i - numOfColumns - 1; x <= numOfColumns + i; x += numOfColumns) {
        for(let y = x; y <= x + 2; y++) {
          
          const tileIsValid = currentTiles.includes(currentTiles[y]) && y !== i && i % numOfColumns !== 0

          if(tileIsValid) {
            if(currentTiles[y].active) {
              numOfAdjacentActiveTiles += 1
            }
          }
        }
      }
      console.log(numOfAdjacentActiveTiles)
      numOfAdjacentActiveTiles = 0
    }

    // console.log(numOfAdjacentActiveTiles)
    // numOfAdjacentActiveTiles = 0
  }

  const toggleTile = (tile) => {

    tile.active = tile.active ? false : true
    setClicker(clicker ? false : true)
  }
  
  return (

    tilesArr.map((row) => {
      return (
        row.map((tile) => {
          return <div key={tile.key} className={`tile ${tile.active ? "active" : "inactive"}`} style={{width: tileSize + "px", height: tileSize + "px"}} onClick={() => {toggleTile(tile)}}></div>
        })
      )
    })
  )
}
