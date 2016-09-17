import { Injectable } from '@angular/core';
import { config } from '../app.config';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BlogCategory } from '../classes/BlogCategory.class';


@Injectable()
export class BlogCategoryService {

	private categories : BlogCategory[];
	private levelOneMenu = new Array<BlogCategory>();

	constructor(private http:Http) {

	}

	// get all categories from server , and cache the result in local memery
	getCateInfo():Promise<BlogCategory[]>{
		if(this.categories){
			return new Promise<BlogCategory[]>((resolve,reject)=>{
				resolve(this.categories);
			});
		}

		// test for resolver
		// return new Promise<BlogCategory[]>((resolve,reject)=>{
		// 	setTimeout(()=>{
		// 		console.log(999999)
		// 		this.categories = [new BlogCategory()];
		// 		resolve(this.categories);
		// 	},5000);
		// });        



		return this.http.get(config.getCateInfoServiceUrl)
				.toPromise()
               	.then(response => {
               		this.categories = response.json() as BlogCategory[];
               		this.categories.forEach((ele,index)=>{
						if(ele.level == 1) this.levelOneMenu.push(ele as BlogCategory); 
					});
               		return this.categories;
               	})
               	.catch(this.handleError);
	}

	// 
	getCategoryByCateId(cateId:string):BlogCategory{
		let cate : BlogCategory;
		this.categories.forEach((ele)=>{
			if(cateId == ele.cat_id) cate = ele;
		})
		return cate;
	}

	getFirstMenuBySonMenu(cate : BlogCategory ) : BlogCategory {
		if(!cate || cate.level == 1){
			// console.log(cate.cat_name,'is first menu!');
			return cate;
		}
		let outMenu : BlogCategory;
		this.categories.forEach(ele=>{

			if(ele.cat_id == cate.parent_id){
				outMenu = ele;
				console.log(ele.cat_name,"first menu of ",cate.cat_name);
			}
		})
		return outMenu;
	}

	getSubMenuList(cate : BlogCategory): BlogCategory[]|void {
		let outList = new Array<BlogCategory>();
		for (let i = 0; i < this.categories.length; ++i) {
			if(this.categories[i].parent_id == cate.cat_id){
				outList.push(this.categories[i]);
			}
		}
		return outList;
	}

	getLevelOneMenu() : BlogCategory[]{
		return this.levelOneMenu;
	}

	handleError():void{
		console.error(arguments);
	}
}
