import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { config  } from '../app.config';
import { BlogArticleService } from '../services/BlogArticle.service';
import { BlogArticle } from '../classes/BlogArticle.class';


@Component({
    selector: 'blog-details',
    templateUrl: config.blogDetailsHtmlUrl
})
export class BlogDetailsComponent implements OnInit {

    private blogArticle: BlogArticle;

    constructor(private route: ActivatedRoute,
                private blogArticleService : BlogArticleService) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let blog_id = params['blog_id'];
            this.blogArticleService.getArticleInfoByBlogId(blog_id)
			.then(data=>{
                data.author = "圊國圊國";
                data.cat_name = "小说";
				this.blogArticle = data;
			});
        });
        console.log('blog details init~');
    }


}