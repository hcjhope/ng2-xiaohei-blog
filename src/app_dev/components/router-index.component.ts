import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'router-index',
	template: `
	    <top-nav></top-nav>
		<main-body [currentCategory]=null [routerComptName]="constructor.name"></main-body>
		<bottom-footer></bottom-footer>
	`
})
export class RouterIndexComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
		
	}
}