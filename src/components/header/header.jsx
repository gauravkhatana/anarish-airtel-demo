import React from 'react';
import { Link } from 'react-router-dom';
import DropdownNotification from './dropdown/notification.jsx';
import DropdownLanguage from './dropdown/language.jsx';
import DropdownProfile from './dropdown/profile.jsx';
import SearchForm from './search/form.jsx';
import DropdownMegaMenu from './dropdown/mega.jsx';
import { AppSettings } from './../../config/app-settings.js';


function Header() {
	return (
		<AppSettings.Consumer>
			{({toggleAppSidebarMobile, toggleAppSidebarEnd, toggleAppSidebarEndMobile, toggleAppTopMenuMobile, appHeaderLanguageBar, appHeaderMegaMenu, appHeaderInverse, appSidebarTwo, appTopMenu, appSidebarNone}) => (
				<div id="header" className="app-header" data-bs-theme={appHeaderInverse ? 'dark' : ''}>
					<div className="navbar-nav">
						<DropdownProfile />
					</div>
				</div>
			)}
		</AppSettings.Consumer>
	);
}

export default Header;
