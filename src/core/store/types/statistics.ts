import { IQuestion } from './questions';

export enum StatisticsActionType {
  ADD_CORRECT = 'STATISTICS/ADD_CORRECT',
  ADD_INCORRECT = 'STATISTICS/ADD_INCORRECT',
  CLEAR = 'STATISTICS/CLEAR',
}

interface ICorrectQuestion extends IQuestion {
  correct: boolean;
}

export interface Statistics {
  correct: number;
  total: number;
  answers: Array<ICorrectQuestion>;
}

interface AddCorrectAnswerAction {
  type: StatisticsActionType.ADD_CORRECT;
  payload: IQuestion;
}

interface AddIncorrectAnswerAction {
  type: StatisticsActionType.ADD_INCORRECT;
  payload: IQuestion;
}

interface ClearStatisticsAction {
  type: StatisticsActionType.CLEAR;
}

export type StatisticsAction = AddCorrectAnswerAction | AddIncorrectAnswerAction | ClearStatisticsAction;
