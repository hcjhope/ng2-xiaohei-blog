
// import lib module
import { NgModule ,NO_ERRORS_SCHEMA}       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// import ours routing Module
import { routing } from './app.routing';

// import ours router components
import { RouterIndexComponent } from './components/router-index.component';
import { RouterCategoryComponent } from './components/router-category.component';

// import ours components
import { Ng2XiaoheiBlogComponent } from './components/ng2-xiaohei-blog.component';
import { HeadTitleComponent } from './components/head-title.component';
import { TopNavComponent } from './components/top-nav.component';
import { BottomFooterComponent } from './components/bottom-footer.component';
import { MainBodyComponent } from './components/main-body.component';
import { IndexArticleListComponent } from './components/index-article-list.component';
import { MyInfoCardComponent } from './components/my-info-card.component';
import { IndexBannerComponent } from './components/index-banner.component';
import { NominateArticlePanelComponent } from './components/nominate-article-panel.component';
import { TopicArticlePanelComponent } from './components/topic-article-panel.component';
import { HotArticlePanelComponent } from './components/hot-article-panel.component';
import { SearchPanelComponent } from './components/search-panel.component';
import { MusicPanelComponent } from './components/music-panel.component';
import { SubmenuPanelComponent } from './components/submenu-panel.component';


// import users services
import {BlogCategoryService} from "./services/BlogCategory.service";
import {BlogArticleService} from "./services/BlogArticle.service";

// import ours resolvers
import { RouterCategoryResolver } from './app.resolvers';

@NgModule({

  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    Ng2XiaoheiBlogComponent , 

    RouterIndexComponent,
    RouterCategoryComponent,

    TopNavComponent,
    HeadTitleComponent,
    BottomFooterComponent,
    MainBodyComponent,
    IndexArticleListComponent,
    IndexBannerComponent,
    MyInfoCardComponent,
    NominateArticlePanelComponent,
    TopicArticlePanelComponent,
    HotArticlePanelComponent,
    SearchPanelComponent,
    MusicPanelComponent,
    SubmenuPanelComponent
  ],
  // providers means that there is something that you can use in bootstrap modules
  providers: [
    BlogCategoryService,
    BlogArticleService,
    RouterCategoryResolver
  ],
  bootstrap: [ Ng2XiaoheiBlogComponent,HeadTitleComponent ],
  schemas :[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
