import { QuestionsState, QuiestionsActionTypes, UserAction } from '../types/questions';

const initialState: QuestionsState = {
  questions: [],
  loading: false,
  error: null
}

const quiestionsReducer = (state = initialState, action : UserAction): QuestionsState => {
  switch (action.type) {
    case QuiestionsActionTypes.LOADING:
      return {questions: [], error: null, loading: true};
    case QuiestionsActionTypes.SUCCESS:
      return {questions: action.payload, error: null, loading: false};
    case QuiestionsActionTypes.ERROR:
      return {questions: [], error: action.payload, loading: false};
    case QuiestionsActionTypes.CLEAR:
      return initialState;
    default: return state;
  }
}

export default quiestionsReducer;
