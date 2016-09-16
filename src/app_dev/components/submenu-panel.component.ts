import { Component, OnInit } from '@angular/core';

import { config } from '../app.config';


@Component({
	selector: 'submenu-panel',
	templateUrl: config.submenuPanelHtmlUrl
})
export class SubmenuPanelComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}