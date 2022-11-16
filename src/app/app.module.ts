import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnComponent } from './page/un/un.component';
import { DeuxComponent } from './page/deux/deux.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { CardComponent } from './components/card/card.component';
import { NavbarLayoutComponent } from './layouts/navbar-layout/navbar-layout.component';
import { TestComponent } from './page/test/test.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnComponent,
    DeuxComponent,
    FormulaireComponent,
    CardComponent,
    NavbarLayoutComponent,
    TestComponent,
    CardsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
