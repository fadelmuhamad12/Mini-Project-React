import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap" 
const NavigationBar = () => {
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
      <Container>
        <Navbar.Brand href="#home">F2k.Stream</Navbar.Brand>
        <Navbar.Toggle z-index-2 aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse z-index-2 id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)


}

export default NavigationBar;