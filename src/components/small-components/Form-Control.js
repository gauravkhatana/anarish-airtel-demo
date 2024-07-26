import React from "react";
import { Form } from "react-bootstrap";

export default function FormControlComponent({
  labelName,
  type,
  placeholder,
  className,
  controlId
}) {
  return (
    <>
      <Form>
        <Form.Group
          className={className || "form-group-crm"}  
          controlId={controlId || "default-form-control-id"}  
        >
          <Form.Label>{labelName}</Form.Label>           
          <Form.Control type={type || "text"} placeholder={placeholder || ""} />
        </Form.Group>
      </Form>
    </>
  );
}
