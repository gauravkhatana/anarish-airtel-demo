import React from 'react'
import { Form } from 'react-bootstrap'

export default function TextForm() {
  return (
    <div className="form-group-crm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>TEXT</Form.Label>
            <Form.Control type="text" placeholder="" />
        </Form.Group>
    </div>
  )
}
    