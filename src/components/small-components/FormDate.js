import React from 'react'
import { Form } from 'react-bootstrap'

export default function DateForm() {
  return (
    <div className="form-group-crm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>DATE</Form.Label>
            <Form.Control type="date" placeholder="" />
        </Form.Group>
    </div>
  )
}
