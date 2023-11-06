import { Component, Input } from '@angular/core';
import { NewUserModel } from './new-user-model';

@Component({
  selector: 'app-new-user-card',
  templateUrl: './new-user-card.component.html',
  styleUrls: ['./new-user-card.component.scss']
})
export class NewUserCardComponent {
  @Input() card_data : Array<NewUserModel> | undefined;
  
}
