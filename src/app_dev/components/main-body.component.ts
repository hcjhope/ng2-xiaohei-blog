import { Component , OnInit,Input  } from '@angular/core';

import { config } from '../app.config';

import { BlogArticleService } from '../services/BlogArticle.service';
import { BlogArticle } from '../classes/BlogArticle.class';
import { BlogCategory } from '../classes/BlogCategory.class';

@Component({
	selector: 'main-body',
	templateUrl: config.mainBodyHtmlUrl
})
export class MainBodyComponent implements OnInit {

	@Input() routerComptName : string;
	@Input() currentCategory : BlogCategory;


	constructor(private blogArticleService:BlogArticleService) {
	}

	ngOnInit() {

	}
}


