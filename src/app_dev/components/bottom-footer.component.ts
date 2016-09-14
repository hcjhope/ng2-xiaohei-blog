import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';


// bottom footer component
@Component({
	selector: 'bottom-footer',
	templateUrl: config.bottomFooterHtmlUrl
})
export class BottomFooterComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}