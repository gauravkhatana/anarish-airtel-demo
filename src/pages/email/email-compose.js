import React, { useEffect, useContext, useState } from 'react';
import { ReactTags } from 'react-tag-autocomplete';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ComposeModuleScss from '../../scss/ModuleFiles/Compose.module.scss'
import EmailModuleScss from '../../scss/ModuleFiles/Email.module.scss'

function EmailCompose() {
	const context = useContext(AppSettings);
	const [isMobileEmailNavOn, setIsMobileEmailNavOn] = useState(false);
	const [cc, setCc] = useState(false);
	const [bcc, setBcc] = useState(false);
	const [tags, setTags] = useState([]);
	const [tagsCc, setTagsCc] = useState([]);
	const [tagsBcc, setTagsBcc] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const [text, setText] = useState('');
	const [editorHeight, setEditorHeight] = useState(0);

	useEffect(() => {
		context.handleSetAppContentFullHeight(true);
		context.handleSetAppContentClass('p-0');

		setTags([
			{ value: 1, label: 'bootstrap@gmail.com' },
			{ value: 2, label: 'google@gmail.com' }
		]);

		setSuggestions([
			{ value: 1, label: 'bootstrap@gmail.com' },
			{ value: 2, label: 'google@gmail.com' },
			{ value: 3, label: 'programmer@gmail.com' },
			{ value: 4, label: 'uxui@gmail.com' },
			{ value: 5, label: 'designer@gmail.com' },
			{ value: 6, label: 'android@gmail.com' }
		]);

		setEditorHeight((window.innerHeight > 600) ? window.innerHeight - 315 : 300);

		return () => {
			context.handleSetAppContentFullHeight(false);
			context.handleSetAppContentClass('');
		};
		// eslint-disable-next-line
	}, []);

	function toggleMobileEmailNav() {
		setIsMobileEmailNavOn(!isMobileEmailNavOn);
	}

	function handleTagAdd(newTag) {
		setTags([...tags, newTag]);
	}

	function handleTagDelete(tagIndex) {
		setTags(tags.filter((_, i) => i !== tagIndex))
	}

	function handleTagCcAdd(newTag) {
		setTagsCc([...tagsCc, newTag]);
	};

	function handleTagCcDelete(tagIndex) {
		setTagsCc(tagsCc.filter((_, i) => i !== tagIndex))
	}

	function handleTagBccAdd(newTag) {
		setTagsBcc([...tagsBcc, newTag]);
	};

	function handleTagBccDelete(tagIndex) {
		setTagsBcc(tagsBcc.filter((_, i) => i !== tagIndex))
	}

	function handleCc(e) {
		setCc(true);
	}

	function handleBcc(e) {
		setBcc(true);
	}

	function handleChange(value) {
		setText(value);
	}

	return (

		<div className="mailbox">

			<div className="mailbox-sidebar">
				<div className={'mailbox-sidebar-content collapse d-lg-block ' + (isMobileEmailNavOn ? 'show' : '')}>
					<PerfectScrollbar className="h-100" options={{ suppressScrollX: true }}>
						<div class="pe-0">
							<div class={`${ComposeModuleScss["widges"]} p-3`}>
								<div class="d-flex align-items-center">
									<img src="assets/images/call-register.svg" alt="" />
									<p class={`ms-2 mb-0 ${ComposeModuleScss["call-reg"]}`}>Call Registration</p>
								</div>

								<div class={`mb-3 mt-3 ${ComposeModuleScss["entry"]}`}>
									<label for="exampleFormControlInput1" class={`${ComposeModuleScss["form-label"]} mb-0`}>Mobile Number *</label>
									<input type="email" class={`${ComposeModuleScss["form-control"]}`} id="exampleFormControlInput1" placeholder="" />
								</div>

								<div class={`mb-3 ${ComposeModuleScss["entry"]}`}>
									<label for="exampleFormControlInput1" class={`${ComposeModuleScss["form-label"]} mb-0`}>Alternate Mobile Number</label>
									<input type="email" class={`${ComposeModuleScss["form-control"]}`} id="exampleFormControlInput1" placeholder="" />
								</div>

								<div class={`mb-3 ${ComposeModuleScss["entry"]}`}>
									<label for="exampleFormControlInput1" class={`${ComposeModuleScss["form-label"]} mb-0`}>Name</label>
									<input type="email" class={`${ComposeModuleScss["form-control"]}`} id="exampleFormControlInput1" placeholder="" />
								</div>

								<div class={`mb-3 ${ComposeModuleScss["entry"]}`}>
									<label for="exampleFormControlInput1" class={`${ComposeModuleScss["form-label"]} mb-0`}>Complaint Number *</label>
									<input type="email" class={`${ComposeModuleScss["form-control"]}`} id="exampleFormControlInput1" placeholder="" />
								</div>

								<div class="mt-5 d-flex align-items-center justify-content-center">
									<button class={`btn ${ComposeModuleScss["reset"]} me-3`}>Reset</button>
									<button class={`btn ${ComposeModuleScss["search"]}`}>Search</button>
								</div>

								<p class={`mt-3 mb-0 ${ComposeModuleScss["fill"]} d-flex align-items-center justify-content-center`}>*Fill atleast one out of two
									mandatory fields</p>
							</div>
						</div>
					</PerfectScrollbar>
				</div>
			</div>


			<div className="mailbox-content">

				<div className="mailbox-content-body">
					<PerfectScrollbar className="h-100" options={{ suppressScrollX: true }}>
						
					</PerfectScrollbar>
				</div>
				<div className={`container ${EmailModuleScss["foot-container"]}  m-0 p-0`}>
					<div className={`${EmailModuleScss["footer"]}`}>
						<div className={`${EmailModuleScss["line"]}`}></div>
						<img src="/assets/img/call-register/process.svg" alt="" className={`${EmailModuleScss["footer-image"]}`} />
						<div className={`${EmailModuleScss["line"]}`}></div>
					</div>

					<div className={`${EmailModuleScss["text"]}`}>
						<p className={`${EmailModuleScss["p1"]} mb-0`}>Copyright © 2024 • ServitiumCRM</p>
						<p className={`${EmailModuleScss["p2"]} mb-0`}>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Security Policy</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EmailCompose;