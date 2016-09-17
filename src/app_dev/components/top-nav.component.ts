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
		})
		.catch(reason=>{
			console.error(reason);
		});

		this.firstCategories = this.blogCategoryService.getLevelOneMenu();
	}

	@Input()
	set currentCategory(cate:BlogCategory){
		this._currentCategory = this.getFirstMenuBySonMenu(cate);
	}

	// get submenu from local memery
	getSubMenuList(cate : BlogCategory): BlogCategory[]|void {
		return this.blogCategoryService.getSubMenuList(cate);
	}

	getFirstMenuBySonMenu(cate:BlogCategory):BlogCategory{
		return this.blogCategoryService.getFirstMenuBySonMenu(cate);
	}

	onFirstNavHover(cate : BlogCategory){
		this.hoverMenu = cate;
		this.getSubMenuList(cate);
	}

}