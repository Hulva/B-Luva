import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodingRoutingModule } from './coding-routing.module';
import { CodeIndexComponent } from './code-index/code-index.component';

@NgModule({
  imports: [
    CommonModule,
    CodingRoutingModule
  ],
  declarations: [CodeIndexComponent]
})
export class CodingModule { }
