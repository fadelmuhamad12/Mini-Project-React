import {Navbar, Container, Nav, NavDropdown, Form} from "react-bootstrap" 
const NavigationBar = () => {
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
      <Container>
        <Navbar.Brand href="#home">F2k.Stream</Navbar.Brand>
        <Navbar.Toggle z-index-2 aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse z-index-2 id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Series</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#pricing">Premium +</Nav.Link>
            <Nav.Link href="#pricing">Contact Us +</Nav.Link>


          </Nav>
          <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
            <Nav.Link href="#deets">Akun</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)


}

export default NavigationBar;