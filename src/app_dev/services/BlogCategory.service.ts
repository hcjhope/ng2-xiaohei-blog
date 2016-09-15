import { Injectable } from '@angular/core';
import { config } from '../app.config';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BlogCategory } from '../classes/BlogCategory.class';

@Injectable()
export class BlogCategoryService {

	private categories : BlogCategory[];

	constructor(private http:Http) {

	}

	// get all categories from server , and cache the result in local memery
	getCateInfo():Promise<BlogCategory[]>{
		if(this.categories){
			return new Promise<BlogCategory[]>((resolve,reject)=>{
				resolve(this.categories);
			});
		}
		return this.http.get(config.getCateInfoServiceUrl)
				.toPromise()
               	.then(response => {
               		return response.json() as BlogCategory[]
               	})
               	.catch(this.handleError);
	}

	// get submenu from local memery
	getSubMenuList(cate : BlogCategory): BlogCategory[]|void {
		if(!this.categories) return null;
		let outList : BlogCategory[];
		for (let i = 0; i < this.categories.length; ++i) {
			if(this.categories[i].parent_id == cate.cat_id){
				outList.push(this.categories[i]);
			}
		}
		return outList;
	}

	handleError():void{
		console.error(arguments);
	}
}
