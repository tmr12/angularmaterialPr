import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { ButttonsComponent } from './butttons/butttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [ButttonsComponent, FlexboxComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DemoRoutingModule,
    
  ]
})
export class DemoModule { }
