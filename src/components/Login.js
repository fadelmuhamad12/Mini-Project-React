import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    console.log({ email, password });
    axios
      .post(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=1a0d8643de94a0bdad2ec29735e6c342",
        {
          email: email,
          password: password,
        }
      )
      .then((result) => {
        console.log(result.data);
        alert("success");
        localStorage.setItem("token", result.data.token);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };

  return (
    <div>
      <h1> FORM LOGIN </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        </Button >
      </Form>
    </div>
  );
};

export default Login;
