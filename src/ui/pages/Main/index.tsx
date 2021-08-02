import React, { useEffect, useState } from 'react';
import { Error, Form, Header, InputTitle, Label, Logo } from './styled';
import logo from '../../../assets/icons/logo.svg';
import cup from '../../../assets/icons/cup.svg';
import coin from '../../../assets/icons/coin.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Container from '../../containers/Container';
import { setGamestate } from '../../../core/store/actions/gamestate';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../core/hooks/useTypedSelector';
import { setAmount, setDifficulty } from '../../../core/store/actions/settings';
import Background from '../../containers/Background';


const Main: React.FC = () => {
  const [ errorText, setErrorText ] = useState<string | undefined>()
  const { difficulty, amount } = useTypedSelector(state => state.settings)

  const dispatch = useDispatch()

  const difficultyHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value === 'easy' || value === 'hard')
      {
        dispatch(setDifficulty(value))
      }
    else {
      setErrorText('Difficulty selection error')
      e.target.value = difficulty
    }
  }

  const amountHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber
    if (typeof value === 'number' && value > 0 && value < 50)
      {
        dispatch(setAmount(value))
      }
    else {
      setErrorText('The amount is entered incorrectly. Choose between 1 and 50')
      e.target.valueAsNumber = amount
    }
  }

  useEffect(() => {
    setErrorText(undefined)
  }, [difficulty, amount])

  return (
    <Background theme='dark'>
      <Container>
        <Header>
          Welcome to the
          <Logo src={logo} alt='Trivia'/>
        </Header>
        <Form>
          <Label htmlFor='difficulty'>
            <InputTitle>
              <img alt='cup' src={cup}/>
              Difficulty
            </InputTitle>
            <Select name='difficulty' id='difficulty' onChange={difficultyHandler} defaultValue={difficulty}>
              <option value='easy'>easy</option>
              <option value='hard'>hard</option>
            </Select>
          </Label>
          <Label htmlFor='amount'>
            <InputTitle>
              <img alt='coin' src={coin}/>
              Amount
            </InputTitle>
            <Input name='amount' id='amount' type='number' min='1' max='50' step='1' defaultValue={amount} onChange={amountHandler}/>
          </Label>
          { errorText && <Error>{errorText}</Error> }
        </Form>
        <Button onClick={() => dispatch(setGamestate('game'))}>True</Button>
      </Container>
    </Background>
  );
};

export default Main;
