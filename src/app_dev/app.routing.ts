import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import ours router components
import { RouterIndexComponent } from './components/router-index.component';
import { RouterCategoryComponent } from './components/router-category.component';


const appRoutes: Routes = [
	{
		path: '',
		component: RouterIndexComponent
	},

	{
		path: 'article_list/:cat_id',
		component: RouterCategoryComponent
	},


	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
