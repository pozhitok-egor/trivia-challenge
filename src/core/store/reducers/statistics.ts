import { Statistics, StatisticsAction, StatisticsActionType } from '../types/statistics';

const initialState:Statistics = {
  total: 0,
  correct: 0,
  answers: []
}

const statisticsReducer = (state = initialState, action : StatisticsAction): Statistics => {
  switch (action.type) {
    case StatisticsActionType.ADD_CORRECT:
      return {
        ...state,
        answers: [...state.answers, {correct: true, ...action.payload}],
        total: state.total + 1,
        correct: state.correct + 1
      };
    case StatisticsActionType.ADD_INCORRECT:
      return {
        ...state,
        answers: [...state.answers, {correct: false, ...action.payload}],
        total: state.total + 1
      };
    case StatisticsActionType.CLEAR:
      return initialState
    default: return state;
  }
}

export default statisticsReducer;
