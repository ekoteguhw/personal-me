import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Header = (props) => (
  <div style={{marginBottom: -25}}>
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-4">{props.heading}</h1>
        <p className="lead">{props.subheading}</p>
      </Container>
    </Jumbotron>
  </div>
)

export default Header
