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

	// @Input() private currentCategory : BlogCategory;
	private _currentCategory : BlogCategory;
	private currentCateId : string;
	private currentCateNoMoreArticles = false;
	private curpage = 1;
	private addMoreIsLoading = false;	
	// bind to view
	private articles : Array<BlogArticle>;
	
	constructor(
		private blogArticleService:BlogArticleService
		) {
	}

	ngOnInit() {

	}

	// listen the property `currentCategory` change event when switch top menu 
	@Input()
	set currentCategory(currentCategory:BlogCategory){
		console.log(currentCategory);
		if(!currentCategory) 
			this.currentCateId = '0';
		else{
			this.currentCateId = currentCategory.cat_id;			
		}

		this._currentCategory = currentCategory;
		this.currentCateNoMoreArticles = false;
		this.curpage = 1;
		this.blogArticleService.getArticleListByCategoryIdInPage(this.currentCateId,this.curpage)
			.then(data=>{
				this.articles = data;
				if(this.articles.length<config.indexArticleListPerPageCount) 
					this.currentCateNoMoreArticles = true;
			})
	}

	// get currentCategory(){
	// 	return this._currentCategory;
	// }

	onAddMoreClicked(){
		if(this.addMoreIsLoading || this.currentCateNoMoreArticles) {
			console.log("Is loading or no more articles !")
			return;
		}
		this.addMoreIsLoading = true;
		this.blogArticleService.getArticleListByCategoryIdInPage(this.currentCateId,++this.curpage)
			.then(data=>{
				console.log(data);
				if(!data || data.length<config.indexArticleListPerPageCount)
					this.currentCateNoMoreArticles = true;
				this.articles = this.articles.concat(data);
				this.addMoreIsLoading = false;
			})
	}
}