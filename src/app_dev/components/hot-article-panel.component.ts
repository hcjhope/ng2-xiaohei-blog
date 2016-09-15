import { Component, OnInit } from '@angular/core';

import { config } from '../app.config';


@Component({
	selector: 'hot-article-panel',
	templateUrl: config.hotArticlePanelHtmlUrl
})
export class HotArticlePanelComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}