
// import lib module
import { NgModule ,NO_ERRORS_SCHEMA}       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';



// import users components
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


// import users services
import {BlogCategoryService} from "./services/BlogCategory.service";



@NgModule({

  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    Ng2XiaoheiBlogComponent , 
    TopNavComponent,
    HeadTitleComponent,
    BottomFooterComponent,
    MainBodyComponent,
    IndexArticleListComponent,
    IndexBannerComponent,
    MyInfoCardComponent,
    NominateArticlePanelComponent,
    TopicArticlePanelComponent,
    HotArticlePanelComponent
  ],
  // providers means that there is something that you can use in bootstrap modules
  providers: [
    BlogCategoryService
  ],
  bootstrap: [ Ng2XiaoheiBlogComponent,HeadTitleComponent ],
  schemas :[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
