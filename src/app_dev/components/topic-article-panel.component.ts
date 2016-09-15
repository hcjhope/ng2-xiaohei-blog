import { Component, OnInit } from '@angular/core';

import { config } from '../app.config';

@Component({
	selector: 'topic-article-panel',
	templateUrl: config.topicArticlePanelHtmlUrl
})
export class TopicArticlePanelComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}