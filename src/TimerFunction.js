import React from 'react'
import Timer from 'react-compound-timer'
import { MDBBtn } from 'mdbreact'

function TimerFunction() {
  let startTime = Math.round(0)
  return (
    <Timer
            initialTime={startTime}
            startImmediately={false}
            formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
>           
            {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                    <h2 className="p-2 col-example text-center">
                        <Timer.Minutes /> : 
                        <Timer.Seconds /> 
                        {/* <Timer.Milliseconds /> */}
                    </h2>
                    {/* <div>{timerState}</div> */}

                    <div className="d-flex justify-content-around">
                      <MDBBtn onClick={start}>Start</MDBBtn>
                      {/* <MDBBtn onClick={pause}>Pause</MDBBtn> */}
                      {/* <MDBBtn onClick={resume}>Resume</MDBBtn> */}
                      <MDBBtn onClick={stop}>Stop</MDBBtn>
                      <MDBBtn onClick={reset}>Reset</MDBBtn>
                    </div>
                  </React.Fragment>
                )}
          </Timer>
  )
}


export default TimerFunction