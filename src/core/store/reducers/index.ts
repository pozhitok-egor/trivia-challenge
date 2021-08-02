import { combineReducers } from 'redux';
import gamestateReducer from './gamestate';
import quiestionsReducer from './questions';
import settingsReducer from './settings';
import statisticsReducer from './statistics';

export const rootReducer = combineReducers({
  questions: quiestionsReducer,
  gamestate: gamestateReducer,
  settings: settingsReducer,
  statistics: statisticsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
