import React, { useContext, useState } from "react";
import { AppSettings } from "./../../config/app-settings.js";
import EmailModuleScss from "../../scss/ModuleFiles/Email.module.scss";
import DropdownComponent from "../../components/small-components/Dropdown.js";
import CardComponent from "../../components/small-components/CardComponent.js";
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

function ThemePanel() {
  const context = useContext(AppSettings);
  const [expand, setExpand] = useState(false);
  const [theme, setTheme] = useState(
    localStorage && typeof localStorage.appTheme !== "undefined"
      ? localStorage.appTheme
      : "teal"
  );
  const themeList = [
    "red",
    "pink",
    "orange",
    "yellow",
    "lime",
    "green",
    "teal",
    "cyan",
    "blue",
    "purple",
    "indigo",
    "dark",
  ];

  function handleDarkMode(e) {
    if (e.target.checked) {
      context.handleSetAppDarkMode(true);
    } else {
      context.handleSetAppDarkMode(false);
    }
  }

  function handleHeaderFixed(e) {
    if (e.target.checked) {
      context.handleSetAppHeaderFixed(true);
    } else {
      context.handleSetAppHeaderFixed(false);
    }
  }

  function handleSidebarFixed(e) {
    if (e.target.checked) {
      context.handleSetAppSidebarFixed(true);
    } else {
      context.handleSetAppSidebarFixed(false);
    }
  }

  function handleHeaderInverse(e) {
    if (e.target.checked) {
      context.handleSetAppHeaderInverse(true);
    } else {
      context.handleSetAppHeaderInverse(false);
    }
  }

  function handleSidebarGrid(e) {
    if (e.target.checked) {
      context.handleSetAppSidebarGrid(true);
    } else {
      context.handleSetAppSidebarGrid(false);
    }
  }

  function handleGradientEnabled(e) {
    if (e.target.checked) {
      context.handleSetAppGradientEnabled(true);
    } else {
      context.handleSetAppGradientEnabled(false);
    }
  }

  function toggleExpand(e) {
    e.preventDefault();
    setExpand(!expand);
  }

  function toggleTheme(e, theme) {
    e.preventDefault();
    context.handleSetAppTheme(theme);
    setTheme(theme);
  }

  return (
    <AppSettings.Consumer>
      {({
        appDarkMode,
        appHeaderFixed,
        appHeaderInverse,
        appSidebarFixed,
        appSidebarGrid,
        appGradientEnabled,
      }) => (
        <div className={"theme-panel " + (expand ? "active" : "")}>
          <a
            href="#0"
            onClick={(e) => toggleExpand(e)}
            className="theme-collapse-btn"
          >
            <i class="fa-solid fa-tower-cell"></i>
          </a>
          <div
            className="theme-panel-content"
            data-scrollbar="true"
            data-height="100%"
          >
            <div className="mx-4 my-3 ">
              <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 "
              >
                <Tab eventKey="home" title="Router Details">
                  {/* <CardComponent/> */}
                  <div className="router-details ps-2">
                    <div className={`${EmailModuleScss["add-enquiry"]}`}>
                      <div className="row">
                        <div className="col-12 mb-3">
                          <label
                            className={`${EmailModuleScss["label-text"]} m-auto`}
                          >
                            Node Name:
                          </label>
                          <input
                            type="text"
                            className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                            placeholder=" "
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <label
                            className={`${EmailModuleScss["label-text"]} m-auto`}
                          >
                            Alarm Type:
                          </label>
                          <input
                            type="text"
                            className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                            placeholder=" "
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <label
                            className={`${EmailModuleScss["label-text"]} m-auto`}
                          >
                            Severity Level:
                          </label>
                          <input
                            type="text"
                            className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                            placeholder=" "
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <label
                            className={`${EmailModuleScss["label-text"]} m-auto`}
                          >
                            SLA:
                          </label>
                          <input
                            type="text"
                            className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                            placeholder=" "
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <label
                            className={`${EmailModuleScss["label-text"]} m-auto`}
                          >
                            Alarm Status:
                          </label>
                          <input
                            type="text"
                            className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                            placeholder=" "
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <label
                            className={`${EmailModuleScss["label-text"]} m-auto`}
                          >
                            Occurred At:
                          </label>
                          <input
                            type="text"
                            className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                            placeholder=" "
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <label
                            className={`${EmailModuleScss["label-text"]} m-auto`}
                          >
                            Cleared On:
                          </label>
                          <input
                            type="text"
                            className={`form-control d-flex ${EmailModuleScss["customer-remarks"]}`}
                            placeholder=" "
                          />
                        </div>

                        <div className="col-12 mb-2">
                          <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                              <h2 class="accordion-header">
                                <button
                                  class="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <div className="circle me-2">
                                    <i class="fa-solid fa-wifi"></i>
                                  </div>
                                  <div className="hd" mb-0>
                                    {" "}
                                    Effective Nodes
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                              >
                                <div class="accordion-body">
                                  <div className="d-flex align-items-center mb-3">
                                    <button className="circle blue me-2"></button>
                                    <div className="hd">012367078_DSL</div>
                                  </div>
                                  <ul type="none">
                                    <li className="d-flex">
                                      <div className="circle danger me-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                        >
                                          <path
                                            d="M7.65597 5.00001C8.34012 5.21317 8.98119 5.55955 9.54 6.02501M11.29 4.24999C9.82875 2.96197 7.94781 2.25131 5.99996 2.25131C5.69746 2.25131 5.39657 2.26845 5.09861 2.30223M4.26489 7.80501C4.77249 7.44439 5.37973 7.25064 6.00239 7.25064C6.62506 7.25064 7.23229 7.44439 7.73989 7.80501M6 9.75H6.005M0.59668 4.35038C1.26348 3.73935 2.0342 3.23987 2.87925 2.88153M2.36597 6.12148C3.06467 5.50599 3.92086 5.06508 4.86632 4.86696M7.84916 7.88755C7.33961 7.48813 6.69759 7.25 5.99994 7.25C5.29175 7.25 4.64086 7.49539 4.12769 7.90579M1.5 1.5L10.5 10.5"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </div>
                                      <div className="l-item d-flex align-items-center">
                                        045215728380_wifi
                                      </div>
                                    </li>
                                    <li className="d-flex">
                                      <div className="circle danger me-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                        >
                                          <path
                                            d="M7.65597 5.00001C8.34012 5.21317 8.98119 5.55955 9.54 6.02501M11.29 4.24999C9.82875 2.96197 7.94781 2.25131 5.99996 2.25131C5.69746 2.25131 5.39657 2.26845 5.09861 2.30223M4.26489 7.80501C4.77249 7.44439 5.37973 7.25064 6.00239 7.25064C6.62506 7.25064 7.23229 7.44439 7.73989 7.80501M6 9.75H6.005M0.59668 4.35038C1.26348 3.73935 2.0342 3.23987 2.87925 2.88153M2.36597 6.12148C3.06467 5.50599 3.92086 5.06508 4.86632 4.86696M7.84916 7.88755C7.33961 7.48813 6.69759 7.25 5.99994 7.25C5.29175 7.25 4.64086 7.49539 4.12769 7.90579M1.5 1.5L10.5 10.5"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </div>
                                      <div className="l-item d-flex align-items-center">
                                        045215728380_wifi
                                      </div>
                                    </li>
                                    <li className="d-flex">
                                      <div className="circle danger me-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                        >
                                          <path
                                            d="M7.65597 5.00001C8.34012 5.21317 8.98119 5.55955 9.54 6.02501M11.29 4.24999C9.82875 2.96197 7.94781 2.25131 5.99996 2.25131C5.69746 2.25131 5.39657 2.26845 5.09861 2.30223M4.26489 7.80501C4.77249 7.44439 5.37973 7.25064 6.00239 7.25064C6.62506 7.25064 7.23229 7.44439 7.73989 7.80501M6 9.75H6.005M0.59668 4.35038C1.26348 3.73935 2.0342 3.23987 2.87925 2.88153M2.36597 6.12148C3.06467 5.50599 3.92086 5.06508 4.86632 4.86696M7.84916 7.88755C7.33961 7.48813 6.69759 7.25 5.99994 7.25C5.29175 7.25 4.64086 7.49539 4.12769 7.90579M1.5 1.5L10.5 10.5"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </div>
                                      <div className="l-item d-flex align-items-center">
                                        045215728380_wifi
                                      </div>
                                    </li>
                                    <li className="d-flex">
                                      <div className="circle danger me-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                        >
                                          <path
                                            d="M7.65597 5.00001C8.34012 5.21317 8.98119 5.55955 9.54 6.02501M11.29 4.24999C9.82875 2.96197 7.94781 2.25131 5.99996 2.25131C5.69746 2.25131 5.39657 2.26845 5.09861 2.30223M4.26489 7.80501C4.77249 7.44439 5.37973 7.25064 6.00239 7.25064C6.62506 7.25064 7.23229 7.44439 7.73989 7.80501M6 9.75H6.005M0.59668 4.35038C1.26348 3.73935 2.0342 3.23987 2.87925 2.88153M2.36597 6.12148C3.06467 5.50599 3.92086 5.06508 4.86632 4.86696M7.84916 7.88755C7.33961 7.48813 6.69759 7.25 5.99994 7.25C5.29175 7.25 4.64086 7.49539 4.12769 7.90579M1.5 1.5L10.5 10.5"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </div>
                                      <div className="l-item d-flex align-items-center">
                                        045215728380_wifi
                                      </div>
                                    </li>
                                    <li className="d-flex">
                                      <div className="circle danger me-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                        >
                                          <path
                                            d="M7.65597 5.00001C8.34012 5.21317 8.98119 5.55955 9.54 6.02501M11.29 4.24999C9.82875 2.96197 7.94781 2.25131 5.99996 2.25131C5.69746 2.25131 5.39657 2.26845 5.09861 2.30223M4.26489 7.80501C4.77249 7.44439 5.37973 7.25064 6.00239 7.25064C6.62506 7.25064 7.23229 7.44439 7.73989 7.80501M6 9.75H6.005M0.59668 4.35038C1.26348 3.73935 2.0342 3.23987 2.87925 2.88153M2.36597 6.12148C3.06467 5.50599 3.92086 5.06508 4.86632 4.86696M7.84916 7.88755C7.33961 7.48813 6.69759 7.25 5.99994 7.25C5.29175 7.25 4.64086 7.49539 4.12769 7.90579M1.5 1.5L10.5 10.5"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </div>
                                      <div className="l-item d-flex align-items-center">
                                        045215728380_wifi
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab eventKey="profile" title="Defect Analysis">
                  <div
                    className={`defect-analysis d-flex align-items-center box-shadow p-3 py-2`}
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
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </AppSettings.Consumer>
  );
}

export default ThemePanel;
