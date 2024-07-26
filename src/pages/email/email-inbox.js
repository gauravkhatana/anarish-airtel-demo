import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";
import EmailModuleScss from "../../scss/ModuleFiles/Email.module.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Card,
  Tab,
  Tabs,
  Dropdown,
  Form,
  Button,
  Col,
  Row,
  Container,
  Nav,
} from "react-bootstrap";
import DropdownComponent from "../../components/small-components/Dropdown.js";
import FormControlComponent from "../../components/small-components/Form-Control.js";
import BtnComponent from "../../components/small-components/Buttons.js";
import CardComponent from "../../components/small-components/CardComponent.js";

function EmailInbox() {
  const context = useContext(AppSettings);
  const [isMobileEmailNavOn, setIsMobileEmailNavOn] = useState(false);

  useEffect(() => {
    context.handleSetAppContentFullHeight(true);
    context.handleSetAppContentClass("p-0");

    return () => {
      context.handleSetAppContentFullHeight(false);
      context.handleSetAppContentClass("");
    };
    // eslint-disable-next-line
  }, []);

  function toggleMobileEmailNav() {
    setIsMobileEmailNavOn(!isMobileEmailNavOn);
  }

  function handleOnChange() {}

  return (
    <>
      <div className="mailbox">
        <div className="mailbox-sidebar">
          <div className="h-100">
            <div
              className={
                "h-100 mailbox-sidebar-content collapse d-lg-block " +
                (isMobileEmailNavOn ? "show" : "")
              }
            >
              <PerfectScrollbar
                className="h-100"
                options={{ suppressScrollX: true }}
              >
                <Container
                  className={`flex-grow-1 ${EmailModuleScss["widges"]}`}
                >
                  <Container className="p-1">
                    <div className="d-flex align-items-center mt-4">
                      <img
                        src="/assets/img/call-register/call-logo.svg"
                        alt=""
                        className={`${EmailModuleScss["call-registration"]}`}
                      />

                      <p
                        className={`mb-0 ps-2 ${EmailModuleScss["h1-call-registration"]}`}
                      >
                        Call Registration
                      </p>
                    </div>

                    <div
                      className={`${EmailModuleScss["box-2"]} mt-2 w-100 mb-3`}
                    >
                      <div className="d-flex align-items-center me-auto">
                        <img
                          src="/assets/img/call-register/user-logo.svg"
                          alt=""
                        />
                        <h1
                          className={`${EmailModuleScss["h3-ethan-hunt"]} mt-2 ms-2`}
                        >
                          Ethan Hunt
                        </h1>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="link"
                          className={` me-2 ${EmailModuleScss["btn1"]}`}
                        >
                          <img
                            src="/assets/img/call-register/call.svg"
                            alt=""
                            className={`p-1 ${EmailModuleScss["box-2-img"]}`}
                          />
                        </Button>
                        <Button
                          variant="link"
                          className={`${EmailModuleScss["btn1"]}`}
                        >
                          <img
                            src="/assets/img/call-register/picker.svg"
                            alt=""
                            className={`p-1 ${EmailModuleScss["box-2-img"]} `}
                          />
                        </Button>
                      </div>
                    </div>

                    <div className="">
                      <Row>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">Customer code</p>
                          <p className="my-1 value-crm">NWEBDE223221</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">Alternate Mobile</p>
                          <p className="my-1 value-crm">--</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">Customer Type</p>
                          <p className="my-1 value-crm">Customer</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">Address</p>
                          <p className="my-1 value-crm">H.No. 321, Sector-3</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">City</p>
                          <p className="my-1 value-crm">Delhi</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">Mobile Number</p>
                          <p className="my-1 value-crm">08765436</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">Email-id</p>
                          <p className="my-1 value-crm">anarish.com</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">Customer Priority Type</p>
                          <p className="my-1 value-crm">Mid</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">Pin code</p>
                          <p className="my-1 value-crm">121004</p>
                        </Col>
                        <Col xl={6} className="key-value-crm mb-3">
                          <p className="my-0 key-crm">State </p>
                          <p className="my-1 value-crm">Haryana</p>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </Container>

                <div className={`${EmailModuleScss["modify-button"]} d-flex justify-content-center py-3 `}>
                <BtnComponent buttonText="Modify Search" variant="primary" />
                </div>
              </PerfectScrollbar>
            </div>
          </div>
        </div>

        <div className="mailbox-content">
          <div className="mailbox-content-body">
            <PerfectScrollbar
              className="h-100"
              options={{ suppressScrollX: true }}
            >
              <div className="mx-4 my-3 ">
                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3 "
                >
                  <Tab eventKey="home" title="Product">
                    <CardComponent/>
                  </Tab>

                  <Tab eventKey="profile" title="Enquiries">
                    <Card>
                      <Card.Title>
                        <div
                          className={`${EmailModuleScss["top-header"]} d-flex align-items-center box-shadow p-3 py-2`}
                        >
                          <div className="d-flex align-items-center me-auto">
                            <img
                              src="/assets/img/call-register/enquiry.svg"
                              alt=""
                              className={`${EmailModuleScss["add-product-img"]}`}
                            />
                            <p
                              className={`h3 mb-0 ${EmailModuleScss["add-product"]}`}
                            >
                              Add Enquiry
                            </p>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Body className="p-0 border-bottom">
                        <div className="p-3">
                          <Row>
                            <div className="col-xl-12 mb-2">
                              <div
                                className={`dropdown ${EmailModuleScss["dropdown"]}`}
                              >
                                <button
                                  className={`btn ${EmailModuleScss["dropdown-toggle"]} w-100 `}
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <div
                                    className={`${EmailModuleScss["product-info"]}`}
                                  >
                                    <img
                                      src="/assets/img/call-register/add-product-logo.svg"
                                      alt=""
                                    />
                                    <p mb-0> Product information</p>
                                  </div>
                                </button>
                                <ul className="dropdown-menu w-100">
                                  <li>
                                    <a className="dropdown-item" href="#!">
                                      Action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#!">
                                      Another action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#!">
                                      Something else here
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xl-4 mb-3 ">
                              <DropdownComponent labelText="Enquiry Level 1" />
                            </div>

                            <div className="col-xl-4 mb-3 ">
                              <DropdownComponent labelText="Enquiry Level 2" />
                            </div>

                            <div className="col-xl-4 mb-3 ">
                              <DropdownComponent labelText="Enquiry Call Center" />
                            </div>

                            <div className="col-xl-4 mb-3">
                              <DropdownComponent labelText="Call Source" />
                            </div>

                            <div className="col-xl-4 mb-3">
                              <DropdownComponent labelText="Direction" />
                            </div>

                            <div className="col-xl-4 mb-3">
                              <DropdownComponent labelText="Document Type" />
                            </div>

                            <div className="col-xl-6 mb-3">
                              <label className="label-text m-auto ">
                                Customer Remarks
                              </label>
                              <input
                                type="text"
                                className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                                placeholder="Enter Remarks"
                              />
                            </div>

                            <div className="col-xl-6 mb-3">
                              <label
                                className={`${EmailModuleScss["label-text"]} m-auto`}
                              >
                                Remarks
                              </label>
                              <input
                                type="text"
                                className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                                placeholder=" Remarks"
                              />
                            </div>
                            <div className="col-xl-12 d-flex justify-content-center">
                              <button
                                className={`${EmailModuleScss["btn3"]} ms-3 ${EmailModuleScss["reset"]}`}
                              >
                                Reset
                              </button>
                              <button
                                className={`${EmailModuleScss["btn4"]} ${EmailModuleScss["submit"]}`}
                              >
                                Submit
                              </button>
                            </div>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab>

                  <Tab>
                    <div
                      className={`${EmailModuleScss["main-box-form-input"]} ps-2`}
                    >
                      <div className={`${EmailModuleScss["add-enquiry"]}`}>
                        <div className="row">
                          <div className="p-3">
                            <div className="row">
                              <div className="col-xl-12 mb-2">
                                <div
                                  className={`dropdown ${EmailModuleScss["dropdown"]}`}
                                >
                                  <button
                                    className={`btn ${EmailModuleScss["dropdown-toggle"]} w-100 `}
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <div
                                      className={`${EmailModuleScss["product-info"]}`}
                                    >
                                      <img
                                        src="/assets/img/call-register/add-product-logo.svg"
                                        alt=""
                                      />
                                      <p mb-0> Product information</p>
                                    </div>
                                  </button>
                                  <ul className="dropdown-menu w-100">
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xl-4 mb-3 ">
                                <label
                                  className={`${EmailModuleScss["label-text"]} m-auto`}
                                >
                                  Enquiry level 1
                                </label>
                                <div
                                  className={` dropdown ${EmailModuleScss["dropdown"]}`}
                                >
                                  <button
                                    className={`btn ${EmailModuleScss["dropdown-toggle"]} w-100 `}
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    -select-
                                  </button>
                                  <ul className="dropdown-menu w-100">
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xl-4 mb-3 ">
                                <label
                                  className={`${EmailModuleScss["label-text"]} m-auto`}
                                >
                                  Enquiry level 2
                                </label>
                                <div
                                  className={`dropdown ${EmailModuleScss["dropdown"]}`}
                                >
                                  <button
                                    className={`btn ${EmailModuleScss["dropdown-toggle"]} w-100 `}
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    -select-
                                  </button>
                                  <ul className="dropdown-menu w-100">
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xl-4 mb-3 ">
                                <label
                                  className={`${EmailModuleScss["label-text"]} m-auto`}
                                >
                                  Enquiry Call Centre
                                </label>
                                <div
                                  className={`dropdown ${EmailModuleScss["dropdown"]}`}
                                >
                                  <button
                                    className={`btn ${EmailModuleScss["dropdown-toggle"]} w-100 `}
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    -select-
                                  </button>
                                  <ul className="dropdown-menu w-100">
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-xl-4 mb-3">
                                <label
                                  className={`${EmailModuleScss["label-text"]} m-auto`}
                                >
                                  Call Source
                                </label>
                                <div
                                  className={`dropdown ${EmailModuleScss["dropdown"]}`}
                                >
                                  <button
                                    className={`btn ${EmailModuleScss["dropdown-toggle"]} w-100 `}
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    -select-
                                  </button>
                                  <ul className="dropdown-menu w-100">
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-xl-4 mb-3">
                                <label
                                  className={`${EmailModuleScss["label-text"]} m-auto`}
                                >
                                  Direction
                                </label>
                                <div
                                  className={`dropdown ${EmailModuleScss["dropdown"]}`}
                                >
                                  <button
                                    className={`btn ${EmailModuleScss["dropdown-toggle"]} w-100 `}
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    -select-
                                  </button>
                                  <ul className="dropdown-menu w-100">
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-xl-4 mb-3">
                                <label
                                  className={`${EmailModuleScss["label-text"]} m-auto`}
                                >
                                  Document type
                                </label>
                                <div
                                  className={`dropdown ${EmailModuleScss["dropdown"]}`}
                                >
                                  <button
                                    className={`btn ${EmailModuleScss["dropdown-toggle"]} w-100 `}
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    -select-
                                  </button>
                                  <ul className="dropdown-menu w-100">
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#!">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="col-xl-6 mb-3">
                                <label className="label-text m-auto ">
                                  Customer Remarks
                                </label>
                                <input
                                  type="text"
                                  className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                                  placeholder="Enter Remarks"
                                />
                              </div>

                              <div className="col-xl-6 mb-3">
                                <label
                                  className={`${EmailModuleScss["label-text"]} m-auto`}
                                >
                                  Remarks
                                </label>
                                <input
                                  type="text"
                                  className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                                  placeholder=" Remarks"
                                />
                              </div>
                            </div>
                          </div>

                          <div className={`${EmailModuleScss["down-buttons"]}`}>
                            <button
                              className={`${EmailModuleScss["btn3"]} ${EmailModuleScss["reset"]}`}
                            >
                              Reset
                            </button>
                            <button
                              className={`${EmailModuleScss["btn4"]} ${EmailModuleScss["submit"]}`}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </PerfectScrollbar>
          </div>
          <div
            className={`container ${EmailModuleScss["foot-container"]}  m-0 p-0`}
          >
            <div className={`${EmailModuleScss["footer"]}`}>
              <div className={`${EmailModuleScss["line"]}`}></div>
              <img
                src="/assets/img/call-register/process.svg"
                alt=""
                className={`${EmailModuleScss["footer-image"]}`}
              />
              <div className={`${EmailModuleScss["line"]}`}></div>
            </div>

            <div className={`${EmailModuleScss["text"]}`}>
              <p className={`${EmailModuleScss["p1"]} mb-0`}>
                Copyright © 2024 • ServitiumCRM
              </p>
              <p className={`${EmailModuleScss["p2"]} mb-0`}>
                Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Security Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailInbox;
