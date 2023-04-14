import axios from "axios";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";


const NavigationBar = () => {
  const [modal, showModal] = useState(false);
  const [modalPremium, showModalPremium] = useState(false);

  // Ini Buat Button menampilkan modal apabila akun di klik
  const handleModalShow = () => {
    showModal(true);
  };

  const handleModalClose = () => {
    showModal(false);
  };
  // END--- Ini Buat Button menampilkan modal apabila akun di klik

  // MODAL UNTUK PREMIUM+
  const clickedModalShow = () => {
    showModalPremium(true);
  };

  const clickedModalClose = () => {
    showModalPremium(false);
  };
  // END-----MODAL UNTUK PREMIUM+

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
            <Link to="/" className="nav-link ">Home</Link>
            <Link to="/series" className="nav-link">Series</Link>
            <Link to="/movies" className="nav-link ">Movies</Link>
            <Nav.Link href="#premium" onClick={clickedModalShow}>
              Premium +
            </Nav.Link>
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
            <Nav.Link className="nav-link" onClick={handleModalShow}>
              Akun
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* // MODAL Login*/}
      <Modal show={modal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* {`${reqToken} ${createSessionWithLogin} ${createSession} ${getAccDetails}`} */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username/Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Username/Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal Premium+ */}
      <Modal show={modalPremium} onHide={clickedModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="titlePremium">Premium+ Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" placeholder="Input Your Email Here" />
              <Form.Text className="text-muted">
                We'll send you an email for a payment.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Input Your Name Here" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>No.Handphone</Form.Label>
              <Form.Control type="text" placeholder="Input Your Number Here" />
            </Form.Group>
            <p className="mb-2">Select Package</p>
            <Form.Select
              aria-label="Floating label select example"
              className="mb-4 "
            >
              <option value="1">4K Resolution (Now Available)</option>
              <option value="2">Full HD 1080p</option>
              <option value="3">HD 720p</option>
              <option value="3">480p</option>
            </Form.Select>

            <Button variant="primary" type="submit" className="btn-subs">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default NavigationBar;
