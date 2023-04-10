import { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NavigationBar = () => {
  const [modal, showModal] = useState(false);

  // Ini Buat Button menampilkan modal apabila akun di klik
  const handleModalShow = () => {
    showModal(true);
  };

  const handleModalClose = () => {
    showModal(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navigationbar"
    >
      <Container>
        <Navbar.Brand href="#home">
          F2k.<span className="stream">Stream</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#premium">Premium +</Nav.Link>
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
            <Nav.Link href="#deets" onClick={handleModalShow}>
              Akun
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Modal show={modal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Premium +</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username/Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Username/email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavigationBar;
