import React from 'react'
import { MDBCol, MDBContainer } from 'mdbreact'
import Timer from 'react-compound-timer'
import TimerFunction from './TimerFunction.js'

function TeamForm() {

  
  return(
    <div style={{border: '1px solid blue'}} className="d-flex flex-column">
      <h1 className="p-2 col-example text-center">Team 1</h1>
      <div className="d-flex flex-column">
        <h3 className="p-2 col-example text-center">Timer</h3>
        <div>
          <TimerFunction/>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h3 className="p-2 col-example text-center">Walls Struck</h3>
        <div className="p-2 col-example text-center">Flex item 2</div>
      </div>
      <div className="d-flex flex-column">
        <h3 className="p-2 col-example text-center">Repositioned</h3>
        <div className="p-2 col-example text-center">Flex item 2</div>
      </div>
    </div>
  )
}

export default TeamForm