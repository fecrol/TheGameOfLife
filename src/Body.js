import React, {useState, useEffect, useRef} from 'react'
import Tiles from './Tiles'

export default function Body() {

  const [dimensions, setDimensions] = useState({})
  const ref = useRef(false)
  
  useEffect(() => {
    /*
    width - 16 and height - 16 to compenstate for the amount of padding added in CSS (0.5 rem each side)
    */

    const containerHeight = ref.current.clientHeight - 16
    const conatinerWidth = ref.current.clientWidth - 16
    const tileContainerDimensions = {height: containerHeight, width: conatinerWidth}

    setDimensions(tileContainerDimensions)
  }, [])

  return (
    <div className="body-container centre" ref={ref}>
      <Tiles dimensions={dimensions} />
    </div>
  )
}
