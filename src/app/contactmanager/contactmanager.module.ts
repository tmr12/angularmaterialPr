import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout'

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  //{path:'demo', loadChildren: ()=> import('./demo/demo.module').then(m => m.DemoModule)},
  {path:'', component: ContactmanagerAppComponent, children:[
    {path:'', component:MaincontentComponent},
    {path:':id', component:MaincontentComponent}
  ] },
  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MaincontentComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class ContactmanagerModule { }
