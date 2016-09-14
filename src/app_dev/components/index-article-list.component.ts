import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';


@Component({
	selector: 'index-article-list',
	templateUrl: config.indexArticleListHtmlUrl
})
export class IndexArticleListComponent implements OnInit {
	
	descEn = "article list in index.html";
	descZh = "首页的文章列表组件";

	constructor() {}

	ngOnInit() {
		
	}
}