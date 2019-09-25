import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GiftGivingState } from '../../../reducers';
import { friendAdded } from '../../../actions/friends.actions';

@Component({
  selector: 'app-friends-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class FriendsEntryComponent implements OnInit {

  constructor(private store: Store<GiftGivingState>) { }

  ngOnInit() {
  }

  addItem(nameEl: HTMLInputElement) {
    const name = nameEl.value;

    this.store.dispatch(friendAdded({ name }));

    nameEl.value = '';
    nameEl.focus();
  }
}
