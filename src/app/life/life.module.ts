import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeRoutingModule } from './life-routing.module';
import { LifeIndexComponent } from './life-index/life-index.component';

@NgModule({
  imports: [
    CommonModule,
    LifeRoutingModule
  ],
  declarations: [LifeIndexComponent]
})
export class LifeModule { }
