import React from 'react'
import { Form } from 'react-bootstrap'

export default function DateTimeForm() {
  return (
    <div className="form-group-crm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>TIME & DATE</Form.Label>
            <Form.Control type="datetime-local" placeholder="" />
        </Form.Group>
    </div>
  )
}
    