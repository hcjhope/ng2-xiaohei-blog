import { Component , OnInit } from '@angular/core';

import { config } from '../app.config';


// root component of the whole body tag
@Component({
  selector: 'ng2-xiaohei-blog',
  template: `
    <top-nav></top-nav>
    <main-body></main-body>
    <bottom-footer></bottom-footer>
  `
})
class Ng2XiaoheiBlogComponent {
  title = 'ng2 xiaohei blog , hello world !';
}