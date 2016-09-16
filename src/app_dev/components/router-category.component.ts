import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'router-category',
	template: `
    	<top-nav></top-nav>
		<main-body></main-body>
		<bottom-footer></bottom-footer>
	`
})
export class RouterCategoryComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}