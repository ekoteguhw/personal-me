import React from 'react'
import { Container } from 'reactstrap'

const Footer = (props) => (
  <div style={props.isBlog ? styles.containerRelative : styles.containerAbsolute}>
    <Container>
      <p>made with love in Bandar Lampung</p>
    </Container>
  </div>
)

const styles = {
  containerRelative: {
    marginTop: 10,
    textAlign: 'right',
    bottom: 0,
    position: 'relative',
    lineHeight: 3,
    backgroundColor: '#3e476f',
    color: 'white'
  },
  containerAbsolute: {
    marginTop: 10,
    textAlign: 'right',
    bottom: 0,
    position: 'absolute',
    lineHeight: 3,
    backgroundColor: '#3e476f',
    color: 'white'
  }
}

export default Footer
