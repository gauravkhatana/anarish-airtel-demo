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
  const [theme, setTheme] = useState(
    localStorage && typeof localStorage.appTheme !== "undefined"
      ? localStorage.appTheme
      : "teal"
  );
  const fault = true;
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
    context.setExpand(!context.expand);
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
        <div className={"theme-panel " + (context.expand ? "active" : "")}>
          <div
            className="theme-panel-content"
            data-scrollbar="true"
            data-height="100%"
          >
            <div className="mx-4 my-3 ">
            <div className="close" onClick={(e) => toggleExpand(e)}><i class="fa-solid fa-x"></i></div> 
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
                  <div className="tree">
                    <ul className={`${fault ?'fault':'' } `}>
                      <li className="parent head">
                        <details>
                          <summary className={`${fault ?'fault':'' } `}>
                            <div className="d-flex align-items-center">
                              <div className="circle  me-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="27"
                                  height="26"
                                  viewBox="0 0 27 26"
                                  fill="none"
                                >
                                  <path
                                    d="M9.30834 15.2749L9.40583 15.1774C9.69833 14.8849 9.7525 14.4082 9.4925 14.0832C8.72334 13.0974 8.33334 11.9274 8.33334 10.8332C8.33334 9.66323 8.7125 8.49323 9.46 7.57239C9.73084 7.24739 9.6875 6.75989 9.38417 6.46739L9.30834 6.39156C8.94 6.02323 8.33334 6.06656 8.00833 6.47823C7.0225 7.75656 6.49167 9.29489 6.49167 10.8332C6.49167 12.3716 7.0225 13.9099 8.00833 15.1882C8.33334 15.5999 8.94 15.6432 9.30834 15.2749ZM20.8025 3.78073L20.7158 3.86739C20.3908 4.19239 20.4017 4.69073 20.6833 5.03739C22.0483 6.69489 22.7417 8.80739 22.7417 10.8332C22.7417 12.8591 22.0592 14.9607 20.6833 16.6291C20.38 16.9866 20.4342 17.5282 20.77 17.8641C21.1492 18.2432 21.7775 18.1999 22.1133 17.7882C23.8142 15.7516 24.5833 13.3357 24.5833 10.8332C24.5833 8.31989 23.7275 5.90406 22.0808 3.86739C21.7558 3.46656 21.16 3.42323 20.8025 3.78073Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M6.78416 3.86739L6.69749 3.78073C6.33999 3.42323 5.74416 3.46656 5.41916 3.86739C3.77249 5.90406 2.91666 8.31989 2.91666 10.8332C2.91666 13.3466 3.77249 15.7624 5.41916 17.7991C5.74416 18.1999 6.33999 18.2541 6.69749 17.8857L6.78416 17.7991C7.10916 17.4741 7.09832 16.9757 6.81666 16.6291C5.44082 14.9607 4.75832 12.8591 4.75832 10.8332C4.75832 8.80739 5.44082 6.70573 6.81666 5.03739C7.09832 4.69073 7.10916 4.19239 6.78416 3.86739ZM18.1592 15.2424C18.5492 15.6324 19.1883 15.5891 19.5242 15.1449C20.4992 13.8666 21.0083 12.3499 21.0083 10.8332C20.9217 9.30573 20.4558 7.76739 19.4917 6.48906C19.4178 6.38996 19.3236 6.30786 19.2153 6.24832C19.1069 6.18879 18.9871 6.15319 18.8639 6.14395C18.7406 6.13471 18.6168 6.15203 18.5009 6.19475C18.3849 6.23746 18.2795 6.30458 18.1917 6.39156L18.105 6.47823C17.8125 6.77073 17.7583 7.24739 18.0183 7.57239C18.7767 8.56906 19.1667 9.73906 19.1667 10.8332C19.1667 11.9924 18.7983 13.1407 18.0725 14.0616C17.7908 14.4082 17.8342 14.9174 18.1592 15.2424ZM16.4583 10.8332C16.4583 9.09989 14.8225 7.74573 13.0133 8.22239C12.1467 8.44989 11.4317 9.14323 11.1717 10.0099C10.825 11.1582 11.2367 12.2199 11.995 12.8699L8.78832 22.4791C8.56082 23.1507 9.05916 23.8332 9.76332 23.8332C10.2075 23.8332 10.5975 23.5516 10.7383 23.1291L11.2258 21.6666H16.285L16.7725 23.1291C16.8125 23.2603 16.8784 23.3823 16.9663 23.4877C17.0542 23.5931 17.1623 23.6798 17.2843 23.7428C17.4062 23.8057 17.5396 23.8436 17.6764 23.8543C17.8132 23.8649 17.9508 23.848 18.081 23.8046C18.2112 23.7612 18.3314 23.6921 18.4345 23.6016C18.5376 23.511 18.6215 23.4007 18.6813 23.2771C18.7411 23.1536 18.7755 23.0193 18.7826 22.8822C18.7897 22.7452 18.7692 22.6081 18.7225 22.4791L15.5158 12.8699C16.09 12.3716 16.4583 11.6566 16.4583 10.8332ZM11.9408 19.4999L13.75 14.0832L15.5592 19.4999H11.9408Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>{" "}
                              <div className="heading d-flex flex-column">
                                <h3 className="hd mb-0">RSU</h3>
                                <div>( OLT - Collected )</div>
                              </div>
                            </div>
                          </summary>
                          <ul>
                            <li>OLT 1</li>
                            <li>OLT 2</li>
                            <li className="parent">
                              <details>
                                <summary className={`${fault ?'fault':'' } `}>OLT 3</summary>
                                <ul>
                                  <li>ODF 1</li>
                                  <li>ODF 2</li>
                                  <li className="parent">
                                    <details>
                                      <summary className={`${fault ?'fault':'' } `}>ODF 3</summary>
                                      <ul>
                                        <li>FAT 1</li>
                                        <li>FAT 2</li>
                                        <li className="parent">
                                          <details>
                                            <summary className={`${fault ?'fault':'' } `}>FAT 3</summary>
                                            <ul>
                                              <li>012367058_DSL</li>
                                              <li>012367058_DSL</li>
                                              <li>012367058_DSL</li>
                                              <li>012367058_DSL</li>
                                              <li>012367058_DSL</li>
                                            </ul>
                                          </details>
                                        </li>
                                      </ul>
                                    </details>
                                  </li>
                                  <li>ODF 4</li>
                                  <li>ODF 5</li>
                                </ul>
                              </details>
                            </li>
                            <li>OLT 4</li>
                            <li>OLT 5</li>
                          </ul>
                        </details>
                      </li>
                    </ul>
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
