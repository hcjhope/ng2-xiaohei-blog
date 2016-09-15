import { Injectable } from '@angular/core';
import { config } from '../app.config';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { BlogArticle } from '../classes/BlogArticle.class';

@Injectable()
export class BlogArticleService {
	
	constructor(private http:Http) {}

	getArticleListByCategoryId(catId:string,count:number|void,offsetCount:number|void)
		: Promise<Array<BlogArticle>>  
	{
		if(count == null || count<1) count = 10;
		if(offsetCount == null || offsetCount<0) offsetCount = 0;

		let reqUrl = `${config.getArticleListByCategoryIdUrl}
					&cat_id=${catId}
					&count=${count}
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