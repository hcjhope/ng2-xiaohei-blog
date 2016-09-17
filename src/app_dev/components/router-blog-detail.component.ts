import { Component, OnInit,enableProdMode } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { config } from '../app.config';

import { BlogArticleService } from '../services/BlogArticle.service';
import { BlogCategoryService } from '../services/BlogCategory.service';
import { BlogArticle } from '../classes/BlogArticle.class';
import { BlogCategory } from '../classes/BlogCategory.class';

enableProdMode();

@Component({
	selector: 'router-blog-detail',
	template: `
	    <top-nav></top-nav>
		<main-body [currentCategory]="currentCategory" [routerComptName]="constructor.name"></main-body>
		<bottom-footer></bottom-footer>
	`
})
export class RouterBlogDetailComponent implements OnInit {
	private currentCategory : BlogCategory;
	constructor(
		private route: ActivatedRoute,
		private blogCategoryService : BlogCategoryService) {

	}

	ngOnInit() {
		this.route.params && this.route.params.forEach((params : Params)=>{
			this.currentCategory = this.blogCategoryService.getCategoryByCateId(params['cat_id']);
		})
	}
}