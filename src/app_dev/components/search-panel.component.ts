import { Component, OnInit } from '@angular/core';

import { config } from '../app.config';


@Component({
	selector: 'search-panel',
	templateUrl: config.searchPanelHtmlUrl
})
export class SearchPanelComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}