import { Component, OnInit } from '@angular/core';

import { config } from '../app.config';

@Component({
	selector: 'index-banner',
	templateUrl: config.indexBannerHtmlUrl
})
export class IndexBannerComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}