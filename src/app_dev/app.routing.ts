import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import ours router components
import { RouterIndexComponent } from './components/router-index.component';
import { RouterCategoryComponent } from './components/router-category.component';
import { BlogDetailsComponent } from './components/blog-details.component';

import { RouterCategoryResolver } from './app.resolvers';



const appRoutes: Routes = [
	{
		path: '',
		component: RouterIndexComponent,
		resolve: {
			category: RouterCategoryResolver
		}
	},

	{
		path: 'article_list/:cat_id',
		component: RouterCategoryComponent,
		resolve: {
			category: RouterCategoryResolver
		}
	},
	{
		path: 'article_blog_details/:blog_id',
		component: BlogDetailsComponent
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
