import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeIndexComponent } from './life-index/life-index.component';

const routes: Routes = [
  {
    path: 'index',
    component: LifeIndexComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeRoutingModule { }
