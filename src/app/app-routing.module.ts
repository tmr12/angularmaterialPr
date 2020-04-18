import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path:'demo', loadChildren: ()=> import('./demo/demo.module').then(m => m.DemoModule)},
  {path:'demo', loadChildren:'./demo/demo.module#DemoModule'},
  {path:'contactmanager', loadChildren:'./contactmanager/contactmanager.module#ContactmanagerModule'},
  {path:'**', redirectTo:'contactmanager'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
