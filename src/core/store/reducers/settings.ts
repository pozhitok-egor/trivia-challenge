import { Settings, SettingsAction, SettingsActionType } from '../types/settings';

const initialState:Settings = {
  difficulty: 'easy',
  amount: 10
}

const settingsReducer = (state = initialState, action : SettingsAction): Settings => {
  switch (action.type) {
    case SettingsActionType.SET_DIFFICULTY:
      return {...state, difficulty: action.payload};
    case SettingsActionType.SET_AMOUNT:
      return {...state, amount: action.payload};
    default: return state;
  }
}

export default settingsReducer;
