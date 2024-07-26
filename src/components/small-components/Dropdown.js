import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';

export default function DropdownComponent({ labelText, className, id, items, toggleText }) {
  return (
    <>
      <Form.Label>{labelText}</Form.Label>
      <div className='dropdown-crms'>
      <Dropdown>
        <Dropdown.Toggle
          className={className || 'default-dropdown-class'}
          variant="dropdown-crm"
          id={id || 'default-dropdown-id'}
        >
         -Select-
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <Dropdown.Item key={index} href={item.href}>
                {item.label}
              </Dropdown.Item>
            ))
          ) : (
            <Dropdown.Item>No items available</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
      </div>
    </>
  );
}
