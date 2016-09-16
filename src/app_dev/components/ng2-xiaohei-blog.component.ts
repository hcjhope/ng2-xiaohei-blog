import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';


// root component of the whole body tag
@Component({
  selector: 'ng2-xiaohei-blog',
  template: `
    <router-outlet></router-outlet>
  `
})
export class Ng2XiaoheiBlogComponent {
  title = 'ng2 xiaohei blog , hello world !';
}