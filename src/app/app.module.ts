import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopnavComponent } from './components/topnav/topnav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderCardComponent } from './components/dashboard/header-card/header-card.component';
import { OrderCardComponent } from './components/dashboard/order-card/order-card.component';
import { NewUserCardComponent } from './components/dashboard/new-user-card/new-user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent,
    HeaderCardComponent,
    OrderCardComponent,
    NewUserCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
