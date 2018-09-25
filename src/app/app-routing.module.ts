import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestsComponent} from './components/tests/tests.component';
import {PageObjectBuilderComponent} from './components/page-object-builder/page-object-builder.component';
const routes: Routes = [
  {
    path: 'tests',
    component: TestsComponent
  },
  {
    path: 'builder',
    component: PageObjectBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
