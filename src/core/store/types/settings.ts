export enum SettingsActionType {
  SET_DIFFICULTY = 'SETTINGS/SET_DIFFICULTY',
  SET_AMOUNT = 'SETTINGS/SET_AMOUNT'
}

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Settings {
  difficulty: Difficulty;
  amount: number;
}

interface SetDifficultyAction {
  type: SettingsActionType.SET_DIFFICULTY;
  payload: Difficulty;
}

interface SetAmountAction {
  type: SettingsActionType.SET_AMOUNT;
  payload: number;
}

export type SettingsAction = SetDifficultyAction | SetAmountAction;
