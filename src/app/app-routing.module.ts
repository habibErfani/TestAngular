import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnComponent} from './page/un/un.component';
import {DeuxComponent} from './page/deux/deux.component';
import {NavbarLayoutComponent} from "./layouts/navbar-layout/navbar-layout.component";
import {TestComponent} from "./page/test/test.component";

const routes: Routes = [
  {path:'',component: NavbarLayoutComponent, children:[
    {path:'page-une', component: UnComponent},
    {path:'page-deux', component:DeuxComponent},
      {path:'test', component:TestComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
