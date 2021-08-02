import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../core/hooks/useTypedSelector';
import { setGamestate } from '../../../core/store/actions/gamestate';
import Button from '../../components/Button';
import Cross from '../../components/Cross';
import Background from '../../containers/Background';
import Container from '../../containers/Container';
import { Number, Score, Answer, Answers, Avatar, Correct, Stars } from './styled';
import check from '../../../assets/icons/check.svg'
import avatar from '../../../assets/icons/avatar.svg'
import Close from '../../components/Close';
import { twoDigits } from '../../../core/utils/digits';
import { clearStatistics } from '../../../core/store/actions/statistics';

const Star = ({checked}:{checked: Boolean}) => {
  return (
    <svg width='35' height='33' viewBox='0 0 35 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M17.3698 0.438477L23.0344 10.4226L34.2804 12.7247L26.5353 21.1974L27.8211 32.6043L17.3698 27.8565L6.91851 32.6043L8.20428 21.1974L0.459244 12.7247L11.7052 10.4226L17.3698 0.438477Z' fill={checked ? `#FF7C7C` : `#969CDC`}/>
    </svg>
  )
}

const Statistics: React.FC = () => {
  const { answers, correct, total } = useTypedSelector(state => state.statistics)

  const dispatch = useDispatch()

  return (
    <Background theme='dark'>
      <Container>
        <Close
            width={25}
            height={25}
        />
        <Score>
          <Avatar src={avatar} alt='Avatar'/>
          You scored
          <Number>
            <Correct>
            {twoDigits(correct)}
            </Correct>
            /{twoDigits(total)}
          </Number>
        </Score>
        <Stars>
          { answers &&
          [...answers].sort((a, b) => {
            if (a.correct === true && b.correct === false) {
              return -1
            }
            if (a.correct === false && b.correct === true) {
              return 1
            }
            return 0
          })
          .map((question, index) =>
            <Star key={index} checked={question.correct}/>
          )
          }
        </Stars>
        <Answers>
          { answers &&
          answers.map((question, index) =>
            <Answer key={index} correct={question.correct}>{decodeURIComponent(question.question)}
            { question.correct ? <img src={check} alt='correct'/> : <Cross fill='#4953BE'/>}
            </Answer>
          )
          }
        </Answers>
        <Button style={{marginBottom: '50px'}} onClick={() => {
          dispatch(setGamestate('menu'))
          dispatch(clearStatistics())
        }}>Play again</Button>
      </Container>
    </Background>
  );
};

export default Statistics;
