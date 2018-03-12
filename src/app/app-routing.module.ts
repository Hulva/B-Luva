import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppGuardGuard } from './app-guard.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canLoad: [AppGuardGuard],
    canActivate: [AppGuardGuard]
  },
  {
    path: 'life',
    loadChildren: './life/life.module#LifeModule'
  },
  {
    path: 'code',
    loadChildren: './coding/coding.module#CodingModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
