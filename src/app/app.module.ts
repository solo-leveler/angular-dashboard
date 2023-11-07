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
import { LineChartCardComponent } from './components/dashboard/line-chart-card/line-chart-card.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ColumnChartCardComponent } from './components/dashboard/column-chart-card/column-chart-card.component';
import { DonutChartCardComponent } from './components/dashboard/donut-chart-card/donut-chart-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent,
    HeaderCardComponent,
    OrderCardComponent,
    NewUserCardComponent,
    LineChartCardComponent,
    ColumnChartCardComponent,
    DonutChartCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
