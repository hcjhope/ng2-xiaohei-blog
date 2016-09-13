import { NgModule ,NO_ERRORS_SCHEMA}       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { 
  AppComponent , 
  TopNavComponent,
  HeadTitleComponent,
  BottomFooterComponent,
  MainBodyComponent
} from './app.component';




@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent , 
    TopNavComponent,
    HeadTitleComponent,
    BottomFooterComponent,
    MainBodyComponent
  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent,HeadTitleComponent ],
  schemas :[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
