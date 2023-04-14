import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit () {
    await apiTmdb.get("authentication/token/new")
    .then((response)=>{
      console.log(response);
      apiTmdb.post("authentication/token/validate_with_login", {
        username:username,
        password:password,
        request_token: response.data.request_token
      }).then((response2)=>{
        apiTmdb
        alert(response2);
        localStorage.setItem("authToken",JSON.stringify(response2))
      })
    })
    .catch((error)=>{
      alert(error.message);
    })
  }

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
