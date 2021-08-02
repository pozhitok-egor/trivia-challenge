import axios from 'axios'
import { Dispatch } from 'redux';
import { QuiestionsActionTypes } from '../types/questions';
import { Difficulty } from '../types/settings';

export const clearQuestions = () => {
  return {
    type: QuiestionsActionTypes.CLEAR
  }
}

export const fetchQuestions = (difficulty:Difficulty, amount: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: QuiestionsActionTypes.LOADING
    })
    axios.get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean&encode=url3986`, {
      headers: {
        accept: 'application/json'
      }
    })
    .then((res) => {
      dispatch({
        type: QuiestionsActionTypes.SUCCESS,
        payload: res.data.results
      });
    })
    .catch((err) => {
      dispatch({
        type: QuiestionsActionTypes.ERROR,
        payload: 'Error'
      });
    })
  }
}
