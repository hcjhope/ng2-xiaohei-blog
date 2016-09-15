import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';


@Component({
	selector: 'music-panel',
	templateUrl: config.musicPanelHtmlUrl
})
export class MusicPanelComponent implements OnInit {
	
	descEn = "music panel in index.html";
	descZh = "首页侧边的音乐面板";

	constructor() {}

	ngOnInit() {
		
	}
}