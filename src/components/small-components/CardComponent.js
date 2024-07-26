import React , {useState} from 'react'
import EmailModuleScss from "../../scss/ModuleFiles/Email.module.scss";
import {Card, Col, Row, Form } from "react-bootstrap";
import DropdownComponent from './Dropdown';
import FormControlComponent from './Form-Control';
import BtnComponent from './Buttons';
import MultiSelectDropdown from './multiSelectDropdown';
import FileUploader from './FileUploader';
import DependentCombo from './DependentCombo';
import DropdownSearch from './DropdownSearch';
import MultiSelect from './MultiSelect';
import DropImageComponent from './dropImage';
import DateForm from './FormDate';
import TimeForm from './FormTime';
import DateTimeForm from './DateTimeForm';
import TextForm from './FormText';


export default function CardComponent() {

  const productOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'Acc. Required', label: 'Acc. Required' },
    { value: 'Address not found', label: 'Address not found' },
    { value: 'Address not clear', label: 'Address not clear' },
    { value: 'Already repaired', label: 'Already repaired' },
    { value: 'Demo/Service refused', label: 'Demo/Service refused' },
    { value: 'Details conveyed to PIC', label: 'Details conveyed to PIC' },
    { value: 'Door Lock', label: 'Door Lock' },
    { value: 'Duplicate Call', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' }
  ];

  return (
    <>
                  <Card>
                      <Card.Title
                        className={`${EmailModuleScss["top-header"]} d-flex align-items-center box-shadow p-3 py-2`}
                      >
                        <div className="d-flex align-items-center me-auto">
                          <img
                            src="/assets/img/call-register/add-product-logo.svg"
                            alt=""
                            className={`${EmailModuleScss["add-product-img"]}`}
                          />
                          <p
                            className={`h3 mb-0 ${EmailModuleScss["add-product"]}`}
                          >
                            Add Product
                          </p>
                        </div>
                        <button className="btn p-0 ">
                          <img
                            src="/assets/img/call-register/cross.svg"
                            alt=""
                            className={`${EmailModuleScss["cross-logo-img"]}`}
                          />
                        </button>
                      </Card.Title>
                      <Card.Body className="p-0 border-bottom">
                        <div className="p-3">
                          <Row className="">


                          <Col xl={3} className="mb-3">
                           <div className='bdr-around'>
                           <MultiSelectDropdown
                              options={productOptions}
                            />
                           </div>
                          </Col>

                          <Col xl={3} className="mb-3">
                           <div className='bdr-around'>
                           <DependentCombo
                              options={productOptions}
                            />
                           </div>
                          </Col>

                          <Col xl={3} className="mb-3">
                            <MultiSelect
                              options={productOptions}
                            />
                          </Col>

                          <Col xl={3} className="mb-3">
                            <DropdownSearch
                              options={productOptions}
                            />
                          </Col>

                            <Col xl={3} className="d-flex align-items-center ">
                            <Form>
                              {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="">
                                  <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`default ${type}`}
                                  />
                                </div>
                              ))}
                            </Form>
                            </Col>

                            <Col xl={3} className="d-flex align-items-center ">
                            <Form>
                              {['radio'].map((type) => (
                                <div key={`default-${type}`} className="">
                                  <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`default ${type}`}
                                  />
                                </div>
                              ))}
                            </Form>
                            </Col>

                            <Col xl={3} className=" mb-3">
                              <DropdownComponent
                                labelText="Product Group"
                                className="dropdown-toggle-crm"
                                id="custom-dropdown-id"
                                items={[
                                  { label: "Action", href: "#/action-1" },
                                  {
                                    label: "Another action",
                                    href: "#/action-2",
                                  },
                                  {
                                    label: "Something else here",
                                    href: "#/action-3",
                                  },
                                ]}
                              />
                            </Col>



                            {/* <Col xl={3} className="mb-3">
                              <FormControlComponent
                                labelName="Product"
                                type="text "
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col> */}


                          {/* Date form-control */}
                            <Col xl={3} className="mb-3">
                           <DateForm
                           />
                          </Col>

                            <Col xl={3} className="mb-3">
                           <TimeForm
                           />
                          </Col>

                            <Col xl={3} className="mb-3">
                           <DateTimeForm
                           />
                          </Col>

                            <Col xl={3} className="mb-3">
                           <TextForm
                           />
                          </Col>

                            {/* <Col xl={3} className="mb-3">
                            <FormControlComponent
                                labelName="Date & Time"
                                type="datetime-local"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col> */}

                            {/* <Col xl={3} className="mb-3">
                            <FormControlComponent
                                labelName="Purchase Serial Number"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col> */}

                            {/* <Col xl={3} className="mb-3">
                            <FormControlComponent
                                labelName="Dealer Name"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col> */}

                            <Col xl={3} className="mb-3">
                              <DropdownComponent
                                labelText="Product Support Type"
                                className="dropdown-toggle-crm"
                                id="custom-dropdown-id"
                              />
                            </Col>

                            <Col xl={3} className="mb-3">
                              <DropdownComponent
                                labelText="Warranty Status"
                                className="dropdown-toggle-crm"
                                id="custom-dropdown-id"
                                items={[
                                  { label: "Action", href: "#/action-1" },
                                  {
                                    label: "Another action",
                                    href: "#/action-2",
                                  },
                                  {
                                    label: "Something else here",
                                    href: "#/action-3",
                                  },
                                ]}
                              />
                            </Col>

                            <Col xl={3} className="mb-3">
                            <FormControlComponent
                                labelName="Time"
                                type="time"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col>

                            {/* <Col xl={3} className="mb-3">
                            <FormControlComponent
                                labelName="Date"
                                type="date"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col> */}

                            {/* <Col xl={4} className="mb-3">
                            <FormControlComponent
                                labelName="AMC Number"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col> */}

                            {/* <Col xl={4} className="mb-3">
                            <FormControlComponent
                                labelName="AMC Start Date"
                                type="date"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col> */}

                            {/* <Col xl={4} className="mb-3">
                            <FormControlComponent
                                labelName="AMC End Date"
                                type="date"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col> */}
                            
                            <Col xl= {4}>
                                <DropImageComponent/>
                            </Col>

                            <Col xl={12} className="">
                              <FileUploader />
                            </Col>

                            <div className="col-xl-12 d-flex justify-content-center">
                            <BtnComponent buttonText="Reset" className="me-3" variant="outline" />
                            <BtnComponent buttonText="Submit" variant="primary" />
                            </div>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
    </>
  )
}
