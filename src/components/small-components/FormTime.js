import React from 'react'
import { Form } from 'react-bootstrap'

export default function TimeForm() {
  return (
    <div className="form-group-crm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>TIME</Form.Label>
            <Form.Control type="time" placeholder="" />
        </Form.Group>
    </div>
  )
}
    