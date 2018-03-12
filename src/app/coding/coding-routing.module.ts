import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeIndexComponent } from './code-index/code-index.component';

const routes: Routes = [
  {
    path: 'index',
    component: CodeIndexComponent
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
export class CodingRoutingModule { }
