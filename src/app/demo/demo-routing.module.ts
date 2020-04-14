import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButttonsComponent } from './butttons/butttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


const routes: Routes = [
  {path:'buttons', component: ButttonsComponent},
  {path:'flexbox', component: FlexboxComponent},
  {path:'**', redirectTo:'buttons'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
