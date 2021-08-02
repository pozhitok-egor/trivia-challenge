import { Difficulty, SettingsActionType } from '../types/settings'

export const setDifficulty = (state: Difficulty) => {
  return {
    type: SettingsActionType.SET_DIFFICULTY,
    payload: state
  }
}

export const setAmount = (state: number) => {
  return {
    type: SettingsActionType.SET_AMOUNT,
    payload: state
  }
}
