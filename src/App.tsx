import { useTypedSelector } from './core/hooks/useTypedSelector'
import Game from './ui/pages/Game'
import Main from './ui/pages/Main'
import Statistics from './ui/pages/Statistics'

const App = () => {
  const gamestate = useTypedSelector(state => state.gamestate)
  return (
    <div>
      { gamestate === 'menu' &&
        <Main/>
      }
      { gamestate === 'game' &&
        <Game/>
      }
      { gamestate === 'statistics' &&
        <Statistics />
      }
    </div>
  )
}

export default App
