import React from 'react'
import Timer from 'react-compound-timer'

function TimerFunction() {
  let startTime = Math.round(0)
  return (
    <Timer
            initialTime={startTime}
>
            {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                    <h2 className="p-2 col-example text-center">
                        <Timer.Minutes /> : 
                        <Timer.Seconds /> : 
                        <Timer.Milliseconds />
                    </h2>
                    {/* <div>{timerState}</div> */}

                    <div className="d-flex justify-content-around">
                      <button onClick={start}>Start</button>
                      {/* <button onClick={pause}>Pause</button> */}
                      {/* <button onClick={resume}>Resume</button> */}
                      <button onClick={stop}>Stop</button>
                      <button onClick={reset}>Reset</button>
                    </div>
                  </React.Fragment>
                )}
          </Timer>
  )
}


export default TimerFunction