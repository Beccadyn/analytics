import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import '../styles/fill.css';

export default function LoginPage() {
  const [Id, setId] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return Id.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    LoginPage(Id, password);
  }

  return (
    <div > <h3
    style={{
      textAlign: "center",
      justifyContent: "center",
      marginTop: "30px",
    }}
  >
    {" "}
    Login
  </h3>
      <Container  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" className="mb-3" controlId="email">
            <Form.Label className="blog">Administrative ID:</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="Enter ID"
              value={Id}
              onChange={(e) => setId(e.target.value)}
              className="input"
            />
          </Form.Group>
          <Form.Group size="lg"  className="mb-3" controlId="password">
            <Form.Label className="blog">Password:</Form.Label>
            <Form.Control
            autoFocus
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </Form.Group>
<Link to = '/DashBoard'> 
          <Button
            block
            variant="success"
            size="lg"
            type="submit"
            className="lbtn"
            disabled={!validateForm()}
          >
            {" "}
            Login
          </Button>
          </Link>

          <h6 className="put">
            <Link to="/PasswordReset">Request password reset</Link>
          </h6>
         
        </Form>
      </Container>
    </div>
  );
}
