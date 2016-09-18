import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { config  } from '../app.config';
import { BlogArticleService } from '../services/BlogArticle.service';
import { BlogCategoryService } from '../services/BlogCategory.service';
import { BlogArticle } from '../classes/BlogArticle.class';
import { BlogCategory } from '../classes/BlogCategory.class';


@Component({
    selector: 'blog-details',
    templateUrl: config.blogDetailsHtmlUrl
})
export class BlogDetailsComponent implements OnInit {

    private blogArticle: BlogArticle;
    private currentCategory : BlogCategory;

    constructor(private route: ActivatedRoute,
                private blogCategoryService : BlogCategoryService,
                private blogArticleService : BlogArticleService) { }

    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            let blog_id = params['blog_id'];
            this.blogArticleService.getArticleInfoByBlogId(blog_id)
			.then(data=>{
                this.currentCategory = this.blogCategoryService.getCategoryByCateId(data.cat_id);
				this.blogArticle = data;
			});
        });
    }


}