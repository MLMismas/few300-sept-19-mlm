import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pipe } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import * as appActions from '../../../actions/app.actions';
import * as sortFilterActions from '../actions/sort-filter.actions';
import { loadHolidayData } from '../actions/holidays.actions';
import { loadFriendData } from '../actions/friends.actions';


@Injectable()
export class AppEffects {

  applicationStartedStuff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => sortFilterActions.loadSavedPrefs())
    ), { dispatch: true }
  );

  onAppStartLoadHolidays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      // make an http request to the holidays url from environment
      map(() => loadHolidayData()),
      map(() => loadFriendData())
    ), { dispatch: true }
  );

  constructor(private actions$: Actions) { }
}
