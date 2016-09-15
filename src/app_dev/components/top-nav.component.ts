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
	private hoverMenu : BlogCategory;

	constructor(
		private blogCategoryService : BlogCategoryService
		) {}

	ngOnInit() {
		this.blogCategoryService.getCateInfo().then(data=>{
			this.categories = data
		})
		.catch(reason=>{
			console.error(reason);
		})
	}
	getSubMenu(cate : BlogCategory){
		let subMenu = this.blogCategoryService.getSubMenuList(cate);
		if(!subMenu){
			subMenu = new Array<BlogCategory>;
		}
		// debug for submenu
		subMenu.push(new BlogCategory({cat_id:"0",parent_id:"-1"}));
		return subMenu;
	}

	onFirstNavHover(cate : BlogCategory){
		this.hoverMenu = cate;
	}

}