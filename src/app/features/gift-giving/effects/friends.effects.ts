import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as friendActions from '../actions/friends.actions';
import { switchMap, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { FriendEntity } from '../reducers/friends.reducer';

@Injectable()
export class FriendEffects {

  loadFriendData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(friendActions.loadFriendData),
      switchMap(() => this.client.get<{ friends: FriendEntity[] }>(environment.friendUrl)
        .pipe(
          map(response => response.friends),
          map(friends => friendActions.loadDataSucceeded({ data: friends }))
        )
      )
    ));

  constructor(private actions$: Actions, private client: HttpClient) { }
}
