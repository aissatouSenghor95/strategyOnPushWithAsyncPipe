import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../cards/card.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUserComponent implements OnInit {
  @Input() users$?: Observable<User[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
