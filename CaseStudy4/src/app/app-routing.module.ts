import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [ { path: 'userDetails', loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule) },
{path:"home", component:HomeComponent},
{path:"about", component:AboutComponent},
{path:"userDetails", component:UserDashboardComponent},
{ path: 'ProductDetails', loadChildren: () => import('./product-dashboard/product-dashboard.module').then(m => m.ProductDashboardModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

