import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from '../contexts/ContactProvider';

export const NewContactModal = ({closeModal}) => {
    const idRef = useRef()
  const nameRef = useRef()
  const { createContact } = useContacts()

  function handleSubmit(e) {
    e.preventDefault()

    createContact({id: idRef.current.value, name: nameRef.current.value}  )
    closeModal()
  }
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" className="mt-3">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};
