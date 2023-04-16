import axios from "axios";
import {  useState, useEffect } from "react";
import { Navbar, Container, Nav, Form, Dropdown, Image} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";


const NavigationBar = () => {
  const REACT_APP_IMG_URL = "https://image.tmdb.org/t/p/w45"
  const [modal, showModal] = useState(false);
  const [modalPremium, showModalPremium] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("")
  const isLogin = JSON.parse(localStorage.getItem("session"));
  const isLogged = JSON.parse(localStorage.getItem("datas"));

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

  const clickedModalProfile =() => {
    setModalProfile (true);
  }

  const clickedModalProfileClose =() => {
    setModalProfile (false);
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    // buat ngecek apakah usernya udh login dan data yg mau diambil ada di local storage
    const storedData = localStorage.getItem("datas");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAvatar(parsedData.avatar.tmdb.avatar_path);
      setUsername(parsedData.username);
      setId(parsedData.id)
      setName(parsedData.name);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .get(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=1a0d8643de94a0bdad2ec29735e6c342"
      )
      .then((response) => {
        console.log(response);
        axios
          .post(
            `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=1a0d8643de94a0bdad2ec29735e6c342`,
            {
              username: username,
              password: password,
              request_token: response.data.request_token,
            }
          )
          .then((response2) => {
            console.log(response2);
            axios
              .post(
                "https://api.themoviedb.org/3/authentication/session/new?api_key=1a0d8643de94a0bdad2ec29735e6c342",
                {
                  request_token: response.data.request_token,
                }
              )
              .then((response3) => {
                localStorage.setItem(
                  "session",
                  JSON.stringify(response3.data.session_id)
                );
                axios
                  .get(
                    `https://api.themoviedb.org/3/account?api_key=1a0d8643de94a0bdad2ec29735e6c342&session_id=${response3.data.session_id}`
                  )
                  .then((response4) => {
                    localStorage.setItem(
                      "datas",
                      JSON.stringify(response4.data)
                    );
                    window.location.reload();
                    console.log(response4);
                  });
              });
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navigationbar"
    >
      <Container>
        <Navbar.Brand>
          F2k.<span className="stream">Stream</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link ">
              Home
            </Link>
            <Link to="/series" className="nav-link">
              Series
            </Link>
            <Link to="/movies" className="nav-link ">
              Movies
            </Link>
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
            {isLogged ? (
              <div className="profileLogin text-white mt-2" onClick={clickedModalProfile}>Profile</div>

              //   <Dropdown className="btn-acc d-inline mx-1">
              //   <Dropdown.Toggle id="dropdown-autoclose-true">
              //     Welcome, {username}
              //   </Dropdown.Toggle>
        
              //   <Dropdown.Menu>
              //     <Dropdown.Item>Username: {username}</Dropdown.Item>
              //     <Dropdown.Item>Id: {id}</Dropdown.Item>
              //     <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              //   </Dropdown.Menu>
              // </Dropdown>
            ) : (
              <Nav.Link className="nav-link" onClick={handleModalShow}>
                Login
              </Nav.Link>
            )}
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
              <Form.Control
                type="text"
                placeholder="Enter Username/Email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {/* {!isLogin ? (
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
            ) : (
              <Button variant="primary" type="submit" onClick={handleLogout}>
                Logout
              </Button>
            )} */}
                 <Button onChange={isLogin}
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
          </Form>
          <div className="account text-align-center justify-content-center d-flex mt-5">
            <p>Username: fadelmuhamadp</p>
          </div>
          <div className="pwd text-align-center justify-content-center d-flex">
            <p>Password: 123123123</p>
          </div>
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

        {/* MODAL PROFILE */}
      <Modal show={modalProfile} onHide={clickedModalProfileClose}>
        <Modal.Header closeButton>
          <Modal.Title className="titlePremiumProfile">Welcome !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="profile">
          <Image src={`${process.env.REACT_APP_IMG_URL}/${avatar}`} className="img-profile" />
          <div className="username">Name: {name}</div>
            <div className="username">Username: {username}</div>
            <div className="username">Id: {id}</div>

          </div>
        <Button variant="danger" type="submit" className="btn-subs" onClick={handleLogout}>
              Logout
            </Button>
        </Modal.Body>
      </Modal>

    </Navbar>
  );
};

export default NavigationBar;
