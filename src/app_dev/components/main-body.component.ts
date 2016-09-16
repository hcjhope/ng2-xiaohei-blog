import { Component , OnInit,Input  } from '@angular/core';

import { config } from '../app.config';


@Component({
	selector: 'main-body',
	templateUrl: config.mainBodyHtmlUrl
})
export class MainBodyComponent implements OnInit {

	@Input() isIndexRouter : boolean;

	constructor() {
	}

	ngOnInit() {
		console.log(this.isIndexRouter);		
	}
}


