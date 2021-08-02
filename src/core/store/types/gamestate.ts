export enum GamestateActionTypes {
  SET_GAMESTATE = 'GAME/SET_GAMESTATE'
}

export type Gamestate = 'menu' | 'game' | 'statistics';

export type GamestateAction = {
  type: GamestateActionTypes.SET_GAMESTATE;
  payload: Gamestate;
};
