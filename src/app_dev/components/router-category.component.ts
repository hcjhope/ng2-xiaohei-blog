import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { config } from '../app.config';

import { BlogArticleService } from '../services/BlogArticle.service';
import { BlogCategoryService } from '../services/BlogCategory.service';
import { BlogArticle } from '../classes/BlogArticle.class';
import { BlogCategory } from '../classes/BlogCategory.class';

@Component({
	selector: 'router-category',
	template: `
	    <top-nav [currentCategory]="currentCategory"></top-nav>
		<main-body [currentCategory]="currentCategory" [routerComptName]="constructor.name"></main-body>
		<bottom-footer></bottom-footer>
	`
})
export class RouterCategoryComponent implements OnInit {
	
	private currentCategory : BlogCategory;
	constructor(
		private route: ActivatedRoute,
		private blogCategoryService : BlogCategoryService) {

	}

	ngOnInit() {
		// console.log(this.route.params);
		this.route.params && this.route.params.forEach((params : Params)=>{
			this.currentCategory = this.blogCategoryService.getCategoryByCateId(params['cat_id']);
		})

	}
}