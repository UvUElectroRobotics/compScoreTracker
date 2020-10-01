import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import TeamForm from './TeamForm.js'

function MainContainer() {
  return(
    <MDBContainer className='mt-5'>
      <MDBRow>
        <MDBCol size = "4">
          <TeamForm
            teamName = "Team 1"
          />
        </MDBCol>
        <MDBCol size = "4">
          <TeamForm
              teamName = "Team 2"
            />
        </MDBCol>
        <MDBCol size = "4">
          <TeamForm
              teamName = "Team 3"
            />
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default MainContainer;