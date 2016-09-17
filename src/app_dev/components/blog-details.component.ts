import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { config  } from '../app.config';
import { BlogArticle } from '../classes/BlogArticle.class';

@Component({
    selector: 'blog-details',
    templateUrl: config.blogDetailsHtmlUrl
})
export class BlogDetailsComponent implements OnInit {

    private blogArticle: BlogArticle;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let blog_id = +params['blog_id'];
            //service ajax
            //this.heroService.getHero(id).then(hero => this.hero = hero);

            let temp = new BlogArticle();
            temp.add_time = "2016-09-17";
            temp.author = "圊國圊國";
            temp.click_count = "20";
            temp.content = "content";
            temp.title = "测试Title";
            temp.cat_name = "小说";
            this.blogArticle = temp;
        });
        console.log('blog details init~');
    }


}