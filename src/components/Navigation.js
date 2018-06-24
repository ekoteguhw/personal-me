import React from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap'

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this._toggle = this._toggle.bind(this)
  }

  _toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand href="/">PersonalMe</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/blog">blog</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/about">about</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
