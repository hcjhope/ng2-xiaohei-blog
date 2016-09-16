import { Component , OnInit ,Input} from '@angular/core';

import { config } from '../app.config';
import { BlogArticleService } from '../services/BlogArticle.service';
import { BlogArticle } from '../classes/BlogArticle.class';
import { BlogCategory } from '../classes/BlogCategory.class';

@Component({
	selector: 'index-article-list',
	templateUrl: config.indexArticleListHtmlUrl
})
export class IndexArticleListComponent implements OnInit {
	
	descEn = "article list in index.html";
	descZh = "首页的文章列表组件";

	@Input() private currentCategory : BlogCategory;
	private currentCateId : string;
	private curpage = 1;
	private addMoreIsLoading = false;	
	// bind to view
	private articles : Array<BlogArticle>;
	
	constructor(
		private blogArticleService:BlogArticleService
		) {
		// this.articles = new Array<BlogArticle>();
	}

	ngOnInit() {
		if(!this.currentCategory) this.currentCateId = '0';
		this.blogArticleService.getArticleListByCategoryIdInPage(this.currentCateId,this.curpage)
			.then(data=>{
				this.articles = data;
			})
	}

	onAddMoreClicked(){
		if(this.addMoreIsLoading) return;
		this.addMoreIsLoading = true;
		this.blogArticleService.getArticleListByCategoryIdInPage(this.currentCateId,++this.curpage)
			.then(data=>{
				this.articles = this.articles.concat(data);
				this.addMoreIsLoading = false;
			})
	}
}