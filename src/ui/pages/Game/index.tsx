import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../core/hooks/useTypedSelector';
import { setGamestate } from '../../../core/store/actions/gamestate';
import { fetchQuestions } from '../../../core/store/actions/questions';
import { addCorrectAnswer, addInorrectAnswer } from '../../../core/store/actions/statistics';
import { IQuestion } from '../../../core/store/types/questions';
import { twoDigits } from '../../../core/utils/digits';
import Button from '../../components/Button';
import Close from '../../components/Close';
import Loader from '../../components/Loader';
import Background from '../../containers/Background';
import Container from '../../containers/Container';
import { Error } from '../Main/styled';
import { Title, Level, Progress, Current, Question, Number, Bar, Buttons, Header } from './styled';

const Game: React.FC = () => {
  const { difficulty, amount } = useTypedSelector(state => state.settings);
  const { questions, error, loading } = useTypedSelector(state => state.questions);
  const  [currentQuestion, setCurrentQuestion] = useState<IQuestion>()


  const dispatch = useDispatch()

  const buttonHandler = (correct: boolean) => {
    if (currentQuestion) {
      correct ? dispatch(addCorrectAnswer(currentQuestion)) : dispatch(addInorrectAnswer(currentQuestion))
      if (questions[currentQuestion.index+1])
        setCurrentQuestion({index: currentQuestion.index+1, ...questions[currentQuestion.index+1]})
      else
        dispatch(setGamestate('statistics'))
    }
  }

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion({index: 0, ...questions[0]})
    }
  }, [questions])

  useEffect(() => {
    dispatch(fetchQuestions(difficulty, amount))
  }, [dispatch, difficulty, amount]);

  return (
    <Background theme='light'>
      <Container>
        <Close
          fill='#4953BE'
          width={25}
          height={25}
        />
        { loading && <Loader />}
        { currentQuestion &&
          <>
            <Header>
              <Title>{decodeURIComponent(currentQuestion.category)}</Title>
              <Level>{currentQuestion.difficulty} level</Level>
            </Header>
            <Progress>
              <Number>
                <Current>{twoDigits(currentQuestion.index+1)}</Current>
                <div>/{questions.length}</div>
              </Number>
              <Bar progress={(currentQuestion.index+1)*100/questions.length}></Bar>
            </Progress>
            <Question>{decodeURIComponent(currentQuestion.question)}</Question>
            <Buttons>
              <Button color='blue' onClick={() => buttonHandler(currentQuestion.correct_answer === 'True')}>True</Button>
              <Button color='transparent' onClick={() => buttonHandler(currentQuestion.correct_answer === 'False')}>False</Button>
            </Buttons>
          </>
        }
        {error && <Error>{error}</Error>}
      </Container>
    </Background>
  );
};

export default Game;
