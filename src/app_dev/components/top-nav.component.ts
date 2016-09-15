import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';
import { BlogCategory } from '../classes/BlogCategory.class';
import {BlogCategoryService} from "../services/BlogCategory.service";


// top navigator component
@Component({
	selector: 'top-nav',
	templateUrl: config.topNavHtmlUrl
})
export class TopNavComponent implements OnInit {
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
			console.log(data);
			this.categories.forEach((ele,index)=>{
				if(ele.level == 1) this.firstCategories.push(ele); 
			});
		})
		.catch(reason=>{
			console.error(reason);
		})
	}

	// get submenu from local memery
	getSubMenuList(cate : BlogCategory): BlogCategory[]|void {
		let outList = Array<BlogCategory>;
		for (let i = 0; i < this.categories.length; ++i) {
			if(this.categories[i].parent_id == cate.cat_id){
				outList.push(this.categories[i]);
			}
		}
		return outList;
	}

	onFirstNavHover(cate : BlogCategory){
		this.hoverMenu = cate;
		this.getSubMenuList(cate);
	}

}