import { useRef } from "react";
import { styles } from "../styles";

export default function VideoPlayer({src}) {

  const audioRef = useRef()
  const countRef = useRef(0)
  countRef.current++

  return (
    <div  >
      
      <audio src={src} ref={audioRef} controls autoPlay loop className={`absolute inset-16 top-[800px] z-50 violet-text-gradient  ` }>
        <button onClick={() => {
          audioRef.current.play()
        }}>Play</button>
                <button onClick={() => {
          audioRef.current.pause()
        }}>Pause</button>
      </audio>
    </div>
  )
}
