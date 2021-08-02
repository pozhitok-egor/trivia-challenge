import { Difficulty } from './settings';

export enum QuiestionsActionTypes {
  ERROR = 'QUESTIONS/FETCH_ERROR',
  LOADING = 'QUESTIONS/FETCH_LOADING',
  SUCCESS = 'QUESTIONS/FETCH_SUCCESS',
  CLEAR = 'QUESTIONS/CLEAR'
}

export interface IQuestion {
  index: number;
  question: string;
  category: string;
  correct_answer: string;
  difficulty: Difficulty;
}

export interface QuestionsState {
  questions: any[];
  loading: boolean;
  error: null | string;
}

interface FetchQuiestionsSuccessAction {
  type: QuiestionsActionTypes.SUCCESS;
  payload: any[];
}

interface FetchQuiestionsErrorAction {
  type: QuiestionsActionTypes.ERROR;
  payload: string;
}

interface FetchQuiestionsLoadingAction {
  type: QuiestionsActionTypes.LOADING;
}

interface ClearQuiestionsAction {
  type: QuiestionsActionTypes.CLEAR;
}

export type UserAction = FetchQuiestionsErrorAction | FetchQuiestionsSuccessAction | FetchQuiestionsLoadingAction | ClearQuiestionsAction;
