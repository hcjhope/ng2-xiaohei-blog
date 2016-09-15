/*
in index.html top , my infomation
*/

import { Component, OnInit } from '@angular/core';

import { config } from '../app.config';

@Component({
	selector: 'my-info-card',
	templateUrl: config.myInfoCardHtmlUrl 
})
export class MyInfoCardComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}