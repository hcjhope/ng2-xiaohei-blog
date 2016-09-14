import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';
import { BlogCategory } from '../classes/BlogCategory.class';
import {BlogCategoryService} from "../services/BlogCategory.service";


// top navigator component
@Component({
	selector: 'top-nav',
	templateUrl: config.topNavHtmlUrl
})
export class TopNavComponent implements OnInit {
	private categories : BlogCategory[];

	constructor(
		private blogCategoryService : BlogCategoryService
		) {}

	ngOnInit() {
		this.blogCategoryService.getCateInfo().then(data=>{
			this.categories = data
		})
		.catch(reason=>{
			console.error(reason);
		})
	}
}