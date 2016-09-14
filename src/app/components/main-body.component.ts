import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';


@Component({
	selector: 'main-body',
	templateUrl: config.mainBodyHtmlUrl
})
export class MainBodyComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}


