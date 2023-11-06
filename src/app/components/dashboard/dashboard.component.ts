import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HeaderCardModel } from './header-card/header-card-model';
import { OrderCardModel } from './order-card/order-card-model';
import { NewUserModel } from './new-user-card/new-user-model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private appService : AppService){}
  headerDetails : Array<HeaderCardModel>=[]
  orderDetails : Array<OrderCardModel>= []
  newUserDetails : Array<NewUserModel>= []
  ngOnInit(): void {
    this.appService.getData().subscribe((res:any)=>{
      this.headerDetails = res.top_cards
      this.orderDetails = res.recent_orders
      this.newUserDetails = res.new_users
    })
  }
}
