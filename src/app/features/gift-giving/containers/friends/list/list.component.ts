import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FriendsListItem } from '../../../models';

@Component({
  selector: 'app-friends-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendsListComponent implements OnInit {

  @Input() model: FriendsListItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
