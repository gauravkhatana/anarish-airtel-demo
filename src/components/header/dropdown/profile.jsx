import React from 'react';
import HeaderModuleScss from '../../../scss/ModuleFiles/Header.module.scss'

function DropdownProfile() {
	return (
		<div className={`${HeaderModuleScss["header"]}`}>
				<div className="d-flex align-items-center">
					<img src="/assets/img/header/header-img.svg" alt="" />
					<div className={`${HeaderModuleScss["divider"]}`}></div>
					<h3 className={`mb-0 ${HeaderModuleScss["service"]}`}>Service Center</h3>
				</div>
	
				<div className={`d-flex ${HeaderModuleScss["form-group"]}`}>
					<button type="submit" className="btn btn-search">
						<img src="/assets/img/header/search.svg" alt="" />
					</button>
					<input type="text" className={`${HeaderModuleScss["form-control"]}`} placeholder="Search"/>
				</div>
	
				<div className="d-flex align-items-center">
					<img src="/assets/img/header/dot.svg" alt="" />
					<p className="mb-0 ms-2">Check-In</p>
	
					<div className={`${HeaderModuleScss["divider"]}`}></div>
	
					<p className="mb-0 me-2">Oct 30, 2023</p>
					<p className="mb-0">10:27 AM</p>
					<img src="/assets/img/header/drop-arrow.svg" alt="" />
					<img className="ms-2" src="/assets/img/header/Group.svg" alt="" />
					<p className="mb-0 ms-2">To-Dos</p>
					<img className="ms-1" src="/assets/img/header/seconddrop.svg" alt="" />
					<img className="ms-1" src="/assets/img/header/person.svg" alt="" />
					<p className="mb-0 ms-1">Eddie</p>
					<img className="ms-1" src="/assets/img/header/drop-arrow.svg" alt="" />
				</div>
			</div>
	);
};

export default DropdownProfile;
