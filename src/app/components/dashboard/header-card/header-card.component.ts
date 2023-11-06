import { Component, Input } from '@angular/core';
import { HeaderType, HeaderCardModel } from './header-card-model';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent {
  @Input() card_data : HeaderCardModel | undefined;
  @Input() card_index : number =0;
  headerType = HeaderType;
}
