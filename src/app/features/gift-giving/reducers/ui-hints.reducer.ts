import { createReducer, Action, on } from '@ngrx/store';
import * as sortFilterActions from '../actions/sort-filter.actions';
import * as fromHolidaysActions from '../actions/holidays.actions';

export interface UiHintsState {
  showAll: boolean;
  sortHolidaysBy: string;
  holidaysLoaded: boolean;
}

const initialState: UiHintsState = {
  showAll: true,
  sortHolidaysBy: 'name',
  holidaysLoaded: false
};

// can't export the result of createReducer is why we put it into a
// const and then export it as a function below
const myReducer = createReducer(
  initialState,
  on(sortFilterActions.filterShowall, (state) => ({ ...state, showAll: true })),
  on(sortFilterActions.filterShowOnlyUpcoming, (state) => ({ ...state, showAll: false })),
  on(sortFilterActions.sortHolidaysByDate, (state) => ({ ...state, sortHolidaysBy: 'date' })),
  on(sortFilterActions.sortHolidaysByName, (state) => ({ ...state, sortHolidaysBy: 'name' })),
  on(fromHolidaysActions.loadHolidayData, (state) => ({ ...state, holidaysLoaded: false })),
  on(fromHolidaysActions.loadDataSucceeded, (state) => ({ ...state, holidaysLoaded: true }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action);
}

