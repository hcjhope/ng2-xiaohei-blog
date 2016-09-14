import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';


// top navigator component
@Component({
	selector: 'top-nav',
	templateUrl: config.topNavHtmlUrl
})
class TopNavComponent implements OnInit {
	private categories : BlogCategory[];

	constructor(
		private appServices : AppServices
		) {}

	ngOnInit() {
		this.appServices.getCateInfo().then(data=>{
			this.categories = data
		})
		.catch(reason=>{
			console.error(reason);
		})
	}
}