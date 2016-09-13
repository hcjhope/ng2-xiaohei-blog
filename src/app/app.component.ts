import { Component , OnInit } from '@angular/core';

import { config } from './app.config';


// root component of the whole body
@Component({
  selector: 'xiaohei-blog',
  template: `
    <top-nav></top-nav>
    <main-body></main-body>
    <bottom-footer></bottom-footer>
  `
})
class AppComponent {
  title = 'ng2 xiaohei blog , hello world !';
}


// root component of title
@Component({
	selector: 'head-title',
	template: `
    	<title>{{title}}</title>
	`
})
class HeadTitleComponent implements OnInit {
	
	title = "... ng2 xiaohei blog";

	constructor() {}

	ngOnInit() {
		
	}
}

// top navigator component
@Component({
	selector: 'top-nav',
	templateUrl: config.topNavHtmlUrl
})
class TopNavComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}
// bottom footer component
@Component({
	selector: 'bottom-footer',
	templateUrl: config.bottomFooterHtmlUrl
})
class BottomFooterComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}



@Component({
	selector: 'main-body',
	templateUrl: config.mainBodyHtmlUrl
})
class MainBodyComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}











export {
	AppComponent , 
	TopNavComponent,
	HeadTitleComponent,
	BottomFooterComponent,
	MainBodyComponent
};