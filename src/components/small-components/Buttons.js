import React from "react";
import { Button } from "react-bootstrap";

// Accept buttonText and variant as props
export default function BtnComponent({ buttonText, variant }) {
  return (
    <>
      <Button variant={variant || "primary"}>{buttonText}</Button>
    </>
  );
}
