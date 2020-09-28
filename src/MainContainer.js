import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import TeamForm from './TeamForm.js'

function MainContainer() {
  return(
    <MDBContainer style={{border: '1px solid red'}}>
      <MDBRow>
        <MDBCol size = "4">
          <TeamForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default MainContainer;