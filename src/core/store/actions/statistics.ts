import { IQuestion } from '../types/questions'
import { StatisticsActionType } from '../types/statistics'

export const addCorrectAnswer = (question: IQuestion) => {
  return {
    type: StatisticsActionType.ADD_CORRECT,
    payload: question
  }
}

export const addInorrectAnswer = (question: IQuestion) => {
  return {
    type: StatisticsActionType.ADD_INCORRECT,
    payload: question
  }
}

export const clearStatistics = () => {
  return { type: StatisticsActionType.CLEAR }
}
