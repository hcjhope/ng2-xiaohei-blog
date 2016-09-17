import { Component , OnInit , Input} from '@angular/core';

import { config } from '../app.config';
import { BlogCategory } from '../classes/BlogCategory.class';
import {BlogCategoryService} from "../services/BlogCategory.service";


// top navigator component
@Component({
	selector: 'top-nav',
	templateUrl: config.topNavHtmlUrl
})
export class TopNavComponent implements OnInit {

	private _currentCategory : BlogCategory | void;

	private categories : BlogCategory[];
	private firstCategories = [];
	private hoverMenu : BlogCategory;

	constructor(
		private blogCategoryService : BlogCategoryService
		) {

	}

	ngOnInit() {
		this.blogCategoryService.getCateInfo().then(data=>{
			this.categories = data;
			this.categories.forEach((ele,index)=>{
				if(ele.level == 1) this.firstCategories.push(ele); 
			});
		})
		.catch(reason=>{
			console.error(reason);
		})
	}

	@Input()
	set currentCategory(cate:BlogCategory){
		this._currentCategory = this.getFirstMenuBySonMenu(cate);
		console.log(this._currentCategory);
	}

	// get submenu from local memery
	getSubMenuList(cate : BlogCategory): BlogCategory[]|void {
		let outList = [];
		for (let i = 0; i < this.categories.length; ++i) {
			if(this.categories[i].parent_id == cate.cat_id){
				outList.push(this.categories[i]);
			}
		}
		return outList;
	}

	getFirstMenuBySonMenu(cate : BlogCategory | any) : BlogCategory | void {
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

	onFirstNavHover(cate : BlogCategory){
		this.hoverMenu = cate;
		this.getSubMenuList(cate);
	}

}