import { Gamestate, GamestateAction, GamestateActionTypes } from '../types/gamestate';

const gamestateReducer = (state: Gamestate = 'menu', action : GamestateAction): Gamestate => {
  switch (action.type) {
    case GamestateActionTypes.SET_GAMESTATE:
      return action.payload;
    default: return state;
  }
}

export default gamestateReducer;
