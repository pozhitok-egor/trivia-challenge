import { Dispatch } from 'redux'
import { Gamestate, GamestateActionTypes } from '../types/gamestate'
import { clearQuestions } from './questions'

export const setGamestate = (state: Gamestate) => {
  return async (dispatch: Dispatch) => {
  dispatch(clearQuestions())
  dispatch({
    type: GamestateActionTypes.SET_GAMESTATE,
    payload: state
  })}
}
