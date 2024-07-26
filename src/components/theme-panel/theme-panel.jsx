import React, { useContext, useState } from 'react';
import { AppSettings } from './../../config/app-settings.js';
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
	const [theme, setTheme] = useState((localStorage && typeof localStorage.appTheme !== 'undefined') ?  localStorage.appTheme : 'teal');
	const themeList = ['red','pink','orange','yellow','lime','green','teal','cyan','blue','purple','indigo','dark'];
	
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
			{({appDarkMode, appHeaderFixed, appHeaderInverse, appSidebarFixed, appSidebarGrid, appGradientEnabled}) => (
				<div className={'theme-panel ' + (expand ? 'active' : '')}>
					<a href="#0" onClick={ e => toggleExpand(e) } className="theme-collapse-btn"><i class="fa-solid fa-tower-cell"></i></a>
					<div className="theme-panel-content" data-scrollbar="true" data-height="100%">
					<div className="mx-4 my-3 ">
                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3 "
                >
                  <Tab eventKey="home" title="Router Details">
                    {/* <CardComponent/> */}
					<div
                      className= "router-details ps-2"
                    >
                      <div className={`${EmailModuleScss["add-enquiry"]}`}>
						
                        <div className="row">
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
                          <div className="p-3">
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
                              </div><div className="col-xl-6 mb-3">
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
                              </div><div className="col-xl-6 mb-3">
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
                                      <a className="dropdown-item" href="/">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="/">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="/">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
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
};

export default ThemePanel;
