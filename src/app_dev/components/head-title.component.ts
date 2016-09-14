import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';


// root component of title
@Component({
	selector: 'head-title',
	template: `
    	<title>{{title}}</title>
	`
})
export class HeadTitleComponent implements OnInit {
	
	title = "... ng2 xiaohei blog";

	constructor() {}

	ngOnInit() {
		
	}
}