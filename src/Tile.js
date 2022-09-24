import React, {useState, useEffect} from 'react'

export default function Tile({dimensions, resetBtnClicked, nextBtnClicked, playing, setPlaying, running}) {
    
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
    const updatedTiles = updateTileState([...tilesArr])
    setTilesArr(updatedTiles)
  }, [nextBtnClicked])

  useEffect(() => {
    play([...tilesArr])
  }, [playing])

  const play = async (tiles) => {

    if(running.current) {

      setTilesArr([...updateTileState([...tiles])])
      await wait(300)
      setPlaying(playing === "yay" ? "nay": "yay")
    }
  }
  
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout)
    })
  }
  
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

    if(tiles[0] !== undefined) {
      tiles.forEach((row) => {
        row.forEach((tile) => {
          if(tile.active) {
            tile.active = false
          }
        })
      })
    }
  }

  const updateTileState = (tiles) => {

    let updatedStateTiles = JSON.parse(JSON.stringify(tiles))
    let numOfAdjacentActiveTiles = 0

    if(tiles !== undefined) {

      for(let row = 0; row < numOfRows; row++) {

        for(let col = 0; col < numOfColumns; col++) {

          const tile = tiles[row][col]
  
          for(let y = -1; y <= 1; y++) {
  
            for(let x = -1; x <= 1; x++) {
  
              const validRow = tiles.includes(tiles[row + y])
  
              if(validRow) {
  
                const validCol = tiles[row + y].includes(tiles[row + y][col + x])
  
                if(validCol) {
                  
                  const currentTile = tiles[row + y][col + x]
  
                  if(currentTile.active && currentTile !== tile) {
  
                    numOfAdjacentActiveTiles += 1
                  }
                }
              }
            }
          }
  
          if((tile.active && numOfAdjacentActiveTiles < 2) || (tile.active && numOfAdjacentActiveTiles > 3)) {
            updatedStateTiles[row][col].active = false
          }

          if(!tile.active && numOfAdjacentActiveTiles === 3) {
            updatedStateTiles[row][col].active = true
          }

          numOfAdjacentActiveTiles = 0
        }
      }
    }

    return updatedStateTiles
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
