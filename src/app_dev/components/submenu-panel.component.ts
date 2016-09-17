import { Component, OnInit , Input} from '@angular/core';

import { config } from '../app.config';

import { BlogCategoryService } from '../services/BlogCategory.service';
import { BlogArticle } from '../classes/BlogArticle.class';
import { BlogCategory } from '../classes/BlogCategory.class';


@Component({
	selector: 'submenu-panel',
	templateUrl: config.submenuPanelHtmlUrl
})
export class SubmenuPanelComponent implements OnInit {

	private _currentCategory : BlogCategory;
	private levelOneMenu : Array<BlogCategory>;
	
	constructor(private blogCategoryService : BlogCategoryService) {}

	ngOnInit() {
	}

	@Input() 
	set currentCategory(cate : BlogCategory){
		this._currentCategory = cate;
		this.levelOneMenu = this.blogCategoryService.getLevelOneMenu();
		// console.log(this._currentCategory)
	}

	getFirstMenuBySonMenu(cate:BlogCategory):BlogCategory{
		return this.blogCategoryService.getFirstMenuBySonMenu(cate);
	}

}