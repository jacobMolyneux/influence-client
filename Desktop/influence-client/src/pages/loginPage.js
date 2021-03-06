import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
const LogInPage = () => {
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [tempPassword, setTempPassword] = useState("");
  let [tempUsername, setTempUsername] = useState("");

  const handlePasswordChange = (e) => {
    setTempPassword((tempPassword = e.target.value));
    e.preventDefault();
  };
  const handleUsernameChange = (e) => {
    setTempUsername((tempUsername = e.target.value));
    e.preventDefault();
  };
  const logIn = () => {
    setPassword((password = tempPassword));
    setUsername((username = tempUsername));
  };
  return (
    <Container>
      <Form className="border p-3 m-3" style={{ height: "27rem" }}>
        <Container className="text-center">
          <h1>Log In</h1>
        </Container>

        <Form.Group className="m-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={handleUsernameChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className=" d-flex justify-content-center">
          <Button onClick={logIn} style={{ width: "15rem" }} className="mt-3">
            Log In
          </Button>
        </Form.Group>
        <div>
          <p>Don't have an account yet?</p>
          <a href="/SignUp">Sign Up</a>
        </div>
      </Form>
    </Container>
  );
};
export { LogInPage };
