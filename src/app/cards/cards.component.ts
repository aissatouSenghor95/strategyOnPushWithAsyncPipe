import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { User } from './card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CardsComponent {
  @Input() users?: User;

}
