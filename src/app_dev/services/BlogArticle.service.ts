import { Injectable } from '@angular/core';
import { config } from '../app.config';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { BlogArticle } from '../classes/BlogArticle.class';

@Injectable()
export class BlogArticleService {
	
	constructor(private http:Http) {}
	private pageCount = 5;

	getArticleListByCategoryIdInPage(catId:string,page:number | 1)
		: Promise<Array<BlogArticle>>  
	{
		let offsetCount = ((page-1) * this.pageCount);
		let reqUrl = `${config.getArticleListByCategoryIdUrl}
					&cat_id=${catId}
					&count=${this.pageCount}
					&offsetCount=${offsetCount}`;
		return this.http.get(reqUrl)
			.toPromise()
			.then((response)=>{
				return response.json() as BlogArticle[];
			})
			.catch(this.handleError)
	}

	handleError():void{
		console.error(arguments);
	}
}