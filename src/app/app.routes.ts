import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { drawerRoutes, HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';



export const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "register",
    // component: RegistrationComponent,
    loadComponent: ()=>import('./registration/registration.component').then((mod)=>mod.RegistrationComponent)
  },
  {
    path: "dataList",
    // component: DatasetComponent
    loadComponent:()=>import('./dataset/dataset.component').then((mod)=>mod.DatasetComponent)
  },
  {
    path: "product",
    // component: ProductComponent
    loadComponent:()=>import('./product/product.component').then((mod)=>mod.ProductComponent)
  },
  {
    path: "editor",
    // component:EditorComponent
    loadComponent:()=>import('./editor/editor.component').then((mod)=>mod.EditorComponent)
  },
  {
    path:"about",
    // component:AboutComponent
    loadComponent:()=>import('./about/about.component').then((mod)=>mod.AboutComponent)
  },
  {
    path:"contacts",
    // component:ContactComponent
    loadComponent:()=>import('./contact/contact.component').then((mod)=>mod.ContactComponent)
  },
  {
    path:"products",
    // component:CustomerComponent
    loadComponent:()=>import('./customer/customer.component').then((mod)=>mod.CustomerComponent)
  }
  ,{
    path:"products", children:[
      {path:"Grid" , loadComponent:()=>import('./grid/grid.component').then((mod)=>mod.GridComponent) }
    ]}
  ];


@NgModule({
  declarations: [
  ],
  imports: [CommonModule ,HeaderComponent ,RouterModule.forRoot(drawerRoutes , {preloadingStrategy:PreloadAllModules}) ],
  exports: [RouterModule ],
})
export class AppModule {}
