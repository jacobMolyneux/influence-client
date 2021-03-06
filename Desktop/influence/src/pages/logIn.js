import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const LogInPage = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [tempUsername, setTempUsername] = useState("");
  let [tempPassword, setTempPassword] = useState("");
  const handleUsernameChange = (e) => {
    e.preventDefault();
    setTempUsername((tempUsername = e.target.value));
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setTempPassword((tempPassword = e.target.value));
  };
  const handleSubmission = () => {
    setUsername((username = tempUsername));
    setPassword((password = tempPassword));
    console.log(`the username submitted is: ${username}`);
    console.log(`the password submitted is: ${password}`);
  };
  return (
    <Container>
      <Form className="border p-3 m-3 " style={{ width: "50rem" }}>
        <h1 className="border-bottom">Log In!</h1>
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
        <Button onClick={handleSubmission} className="m-3">
          Log In
        </Button>
      </Form>
    </Container>
  );
};
export { LogInPage };
