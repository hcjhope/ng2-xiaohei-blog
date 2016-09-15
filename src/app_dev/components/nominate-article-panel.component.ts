import { Component, OnInit } from '@angular/core';

import { config } from '../app.config';


@Component({
	selector: 'nominate-article-panel',
	templateUrl: config.nominateArticlePanelHtmlUrl
})
export class NominateArticlePanelComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}