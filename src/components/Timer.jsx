import { useState, useEffect} from "react"
const Timer= ({minute, second, isFinished, visualTimer, timerId})=>{

const [minutes, setMinutes]=useState(0)
const [seconds, setSeconds]=useState(0)

useEffect(() => {
    const initialMinutes = parseInt(minute) || 0;
    setMinutes(initialMinutes);
    const initialSeconds = parseInt(second) || 0;
    setSeconds(initialSeconds);
  }, [minute, second]);

const formatTime = () => {
    console.log(minutes)
    if (isFinished){ 
      if( visualTimer && timerId==="firstTimer")
              return "ГОТОВО"
            else if(!visualTimer && timerId==="secondTimer") return "ГОТОВО"
          }
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <div>{formatTime()}</div>
    </div>
  );
};




export default Timer;