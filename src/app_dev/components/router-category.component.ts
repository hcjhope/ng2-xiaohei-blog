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
	    <top-nav></top-nav>
		<main-body [currentCategory]="currentCategory" [routerComptName]="constructor.name"></main-body>
		<bottom-footer></bottom-footer>
	`
})
export class RouterCategoryComponent implements OnInit {
	
	private currentCategory : BlogCategory;
	constructor(
		private route: ActivatedRoute,
		private blogCategoryService : BlogCategoryService) {
		this.route.params.forEach((params : Params)=>{
			console.log(params,11111);
			this.currentCategory = this.blogCategoryService.getCategoryByCateId(params['cat_id']);
			console.log(this.currentCategory)
		})

	}
	ngOnInit() {
		// console.log(this.route.params);
	}
}