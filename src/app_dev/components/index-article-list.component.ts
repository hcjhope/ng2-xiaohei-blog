import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';
import { BlogArticleService } from '../services/BlogArticle.service';
import { BlogArticle } from '../classes/BlogArticle.class';

@Component({
	selector: 'index-article-list',
	templateUrl: config.indexArticleListHtmlUrl
})
export class IndexArticleListComponent implements OnInit {
	
	descEn = "article list in index.html";
	descZh = "首页的文章列表组件";
	private curpage = 1;
	private curpageOffsetCount = 0;
	private pageCount = 5;
	private cateId = '0';
	private articles : BlogArticle[];
	constructor(
		private blogArticleService:BlogArticleService
		) {}

	ngOnInit() {
		this.blogArticleService.getArticleListByCategoryId(this.cateId,this.pageCount,this.curpageOffsetCount)
			.then(data=>{
				this.articles = data;
			})
	}

	onAddMoreClicked(){

	}
}