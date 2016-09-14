
// import lib module
import { NgModule ,NO_ERRORS_SCHEMA}       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';



// import users module
import { 
  AppComponent , 
  TopNavComponent,
  HeadTitleComponent,
  BottomFooterComponent,
  MainBodyComponent
} from './app.component';
import {AppServices} from "./app.services";



@NgModule({

  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent , 
    TopNavComponent,
    HeadTitleComponent,
    BottomFooterComponent,
    MainBodyComponent
  ],
  // providers means there is something that you can use in AppModule
  providers: [
    AppServices
  ],
  bootstrap: [ AppComponent,HeadTitleComponent ],
  schemas :[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
