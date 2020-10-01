import React, { useState } from 'react'
import { MDBBtn, MDBCard, MDBContainer, MDBCardTitle } from 'mdbreact'
import TimerFunction from './TimerFunction.js'

function TeamForm(props) {

  const MDBBtnStyle = {width: '75px'}
  const [wallsCount, setWallsCount] = useState(0)
  const [touchRobot, setTouchRobot] = useState(0)

  function minus(func, setFunc){
    if(func > 0){
      setFunc(func - 1)
    }
  }
  
  function add(func, setFunc){
    setFunc(func + 1)
  }
  return(
    <MDBContainer className="d-flex flex-column">
      <MDBCard>
        <MDBCardTitle className="p-2 col-example text-center">{props.teamName}</MDBCardTitle>
        <MDBCard className="d-flex flex-column">
          <h3 className="p-2 col-example text-center">Timer</h3>
          <div>
            <TimerFunction/>
          </div>
        </MDBCard>
        <MDBCard className="d-flex flex-column">
          <h3 className="p-2 col-example text-center">Walls Struck</h3>
          <h2 className="p-2 col-example text-center">{wallsCount}</h2>
          <div className="d-flex justify-content-around">
            <MDBBtn style={MDBBtnStyle} onClick={() => add(wallsCount, setWallsCount)}>+</MDBBtn>
            <MDBBtn style={MDBBtnStyle} onClick={() => minus(wallsCount, setWallsCount)}>-</MDBBtn>
          </div>
        </MDBCard>
        <MDBCard className="d-flex flex-column">
          <h3 className="p-2 col-example text-center">Repositioned</h3>
          <h2 className="p-2 col-example text-center">{touchRobot}</h2>
          <div className="d-flex justify-content-around">
            <MDBBtn style={MDBBtnStyle} onClick={() => add(touchRobot, setTouchRobot)}>+</MDBBtn>
            <MDBBtn style={MDBBtnStyle} onClick={() => minus(touchRobot, setTouchRobot)}>-</MDBBtn>
          </div>
        </MDBCard>
      </MDBCard>
    </MDBContainer>
  )
}

export default TeamForm