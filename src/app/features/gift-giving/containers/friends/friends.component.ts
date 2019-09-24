import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GiftGivingState, selectFriendListItems } from '../../reducers';
import { Observable } from 'rxjs';
import { FriendsListItem } from '../../models';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends$: Observable<FriendsListItem[]>;

  constructor(private store: Store<GiftGivingState>) { }

  ngOnInit() {
    this.friends$ = this.store.select(selectFriendListItems);
  }

}
