import React, {useState, useEffect} from 'react'

export default function Tile({dimensions}) {
    
  const [tilesArr, setTilesArr] = useState([])

  const numOfRows = Math.floor(dimensions.height / 16)
  const numOfColumns = Math.floor(dimensions.width / 16)

  useEffect(() => {
    const tiles = generateTiles()
    setTilesArr([...tiles])
  }, [numOfColumns])
  
  const generateTiles = () => {

    const tiles = []
    let key = 0
    
    for(let y = 0; y < numOfRows; y++) {

      for(let x = 0; x < numOfColumns; x++) {
        
        const element = <div key={`tile${key}`} className="tile"></div>

        const tile = {
          element,
          x,
          y,
          active: false
        }

        key++
        tiles.push(tile)
      }
    }

    return tiles
  }
  
  return (
    tilesArr.map((tile) => {
      return tile.element
    })
  )
}
