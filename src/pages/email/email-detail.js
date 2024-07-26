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
					  <Col xl={12} className="mb-3">
                            <FormControlComponent
                                labelName="Name"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col>
							<Col xl={12} className="mb-3">
                            <FormControlComponent
                                labelName="Email"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col>
							<Col xl={12} className="mb-3">
                            <FormControlComponent
                                labelName="Number"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col>
							<Col xl={12} className="mb-3">
                            <FormControlComponent
                                labelName="Address"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col>
							<Col xl={12} className="mb-3">
                            <FormControlComponent
                                labelName="Purchase Invoice Number"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
                            </Col>
							<Col xl={12} className="mb-3">
                            <FormControlComponent
                                labelName="Purchase Invoice Item"
                                type="text"
                                placeholder=""
                                className="form-group-crm"
                                controlId="dealer-email"
                              />
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
      </div>
    </>
  );
}

export default EmailInbox;
