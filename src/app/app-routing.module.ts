import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewNeoComponent } from './component/view-neo/view-neo.component';

const routes: Routes = [ { path: '', component: ViewNeoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
