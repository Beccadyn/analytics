import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Form, Button } from "react-bootstrap";

export default function PasswordReset() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {" "}
        Password Reset
      </h3>
      <h5
        style={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        We'll send you a link for resetting your password
      </h5>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form>
          <Form.Group size="lg" className="mb-3" controlId="formGridEmail">
            <Form.Label className="blog">Email Address:</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </Form.Group>
          <Button
            block
            variant="success"
            size="lg"
            type="submit"
            className="lbtn"
          >
            {" "}
            Login
          </Button>
          <Link to='/LoginPage'> <h5>Request Password reset</h5></Link>
        </Form>
      </Container>
    </div>
  );
}
