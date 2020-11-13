import React from 'react'
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap'
import logo1 from './logo1.png'
function Navbars() {
    return (
        <div>
          <Container fluid>
            <Navbar fixed="top" fluid bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home" variant="dark">
                    <img style={{ borderRadius: "20px" }}
                        src={logo1}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="student-panti logo"
                    />
              
                </Navbar.Brand> 
                <Navbar.Brand >
                    <a style={{color:"aqua"}} href="#login" className="nav-link" > Student Panti </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-center">
                        <Nav.Link href="#features">Test Series</Nav.Link>
                        <NavDropdown title="Current Affair" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Monthaly</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Year</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Weakly</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Some More Information</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Study Material</Nav.Link>
                        <Button variant="outline-primary">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    )
}

export default Navbars
