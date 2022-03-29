import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

export const Login = ({setIdUser}) => {
  const idRef = useRef();

  function handleSubmit(event){
    event.preventDefault();
    setIdUser(idRef.current.value)
  };
  const createNewId = () => {
    setIdUser(uuidv4())
  }

  return (
    <Container className="align-items-center d-flex" style={{height: '100vh'}}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type="text" required ref={idRef} />
        </Form.Group>
        <Button type="submit" className="mr-2 mt-2">
          Login
        </Button>
        <Button variant="secondary" className="mt-2 ml-2" onClick={createNewId}>Create A New Id</Button>
      </Form>
    </Container>
  );
};
