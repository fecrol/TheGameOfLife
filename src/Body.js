import React, {useState, useEffect, useRef} from 'react'
import Tiles from './Tiles'

export default function Body({resetBtnClicked, nextBtnClicked, playing, setPlaying, running}) {

  const [dimensions, setDimensions] = useState({})
  const [winDimensions, setWinDimensions] = useState({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
  const ref = useRef(false)
  
  useEffect(() => {
    /*
    width - 16 and height - 16 to compenstate for the amount of padding added in CSS (0.5 rem each side)
    */

    const containerHeight = ref.current.clientHeight - 16
    const conatinerWidth = ref.current.clientWidth - 16
    const tileContainerDimensions = {height: containerHeight, width: conatinerWidth}

    setDimensions(tileContainerDimensions)
  }, [winDimensions])

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])

  const setWindowDimensions = () => {
    setWinDimensions({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
  }

  return (
    <div className="body-container centre" ref={ref}>
      <Tiles dimensions={dimensions} resetBtnClicked={resetBtnClicked} nextBtnClicked={nextBtnClicked} playing={playing} setPlaying={setPlaying} running={running} />
    </div>
  )
}
