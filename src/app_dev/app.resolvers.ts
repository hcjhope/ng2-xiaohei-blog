import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

import { BlogArticleService } from './services/BlogArticle.service';
import { BlogCategoryService } from './services/BlogCategory.service';

@Injectable()
class RouterCategoryResolver implements Resolve<BlogCategoryService> {
  constructor(private blogCategoryService: BlogCategoryService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any>|any {
    return this.blogCategoryService.getCateInfo();
  }
}


export {RouterCategoryResolver}