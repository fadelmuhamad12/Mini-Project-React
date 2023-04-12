import axios from "axios";
import { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NavigationBar = () => {
  const [modal, showModal] = useState(false);
  const [modalPremium, showModalPremium] = useState(false);
  const [username, setUsername] = useState("fadelmuhamadp");
  const [password, setPassword] = useState("");

  // Ini Buat Button menampilkan modal apabila akun di klik
  const handleModalShow = () => {
    showModal(true);
  };

  const handleModalClose = () => {
    showModal(false);
  };

  // MODAL UNTUK PREMIUM+
  const clickedModalShow = () => {
    showModalPremium(true);
  };

  const clickedModalClose = () => {
    showModalPremium(false);
  };

  // UNTUK FITUR LOGIN
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // const login = (e) => {
  //   axios ({
  //     method: "post",
  //     url: "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=1a0d8643de94a0bdad2ec29735e6c342",
  //     data: {
  //       username: username,
  //       password: password,
  //     }.then (function(result) {
  //       console.log(result.data);
  //       alert("success");
  //       localStorage.setItem("token", result.data.request_token);
  //       handleModalClose();
  //     }).catch((error) => {
  //       alert("error");
  //       console.log(error);
  //     })
      
  //   })
  // }

  const handleApi = (e) => {
    e.preventDefault();
    console.log({ username, password });
    axios
      .post(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=1a0d8643de94a0bdad2ec29735e6c342",
        {
          username: username,
          password: password,
         
        }
      )
      .then((result) => {
        console.log(result.data);
        alert("success");
        localStorage.setItem("token", result.data.request_token);
        handleModalClose();
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
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
            <Nav.Link href="#series">Movies</Nav.Link>
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
          <Form onSubmit={handleApi}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username/Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username/Email"
                value={username}
                onChange={handleUsername}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
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
              <Form.Control type="number" placeholder="Input Your Name Here" />
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
