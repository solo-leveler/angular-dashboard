import { Component, Input } from '@angular/core';
import { ColumnModel, OrderCardModel } from './order-card-model';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  @Input() card_data : Array<OrderCardModel> | undefined;
  columns : Array<ColumnModel> = [
    {
      name : '#',
      columnDef : ''
    },
    {
      name: 'Customer',
      columnDef : 'name'
    },
    {
      name : 'Products',
      columnDef : 'product'
    },
    {
      name : 'Delivery Date',
      columnDef : 'delivery_date'
    },
    {
      name : 'Status',
      columnDef : 'status'
    },
    {
      name : 'Tracking No#',
      columnDef : 'tracking_no'
    },
    {
      name : 'Shipping',
      columnDef : 'shipping'
    },
    {
      name: '',
      columnDef : 'action'
    }
  ]
}
