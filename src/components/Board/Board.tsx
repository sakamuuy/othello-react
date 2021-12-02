import { Square, Props as SquareProps } from '../Square'
import './index.css'

export type Props = {
  squarePropsArr: SquareProps[][],
  currentPlayer: SquareProps['player']
}

export const Presentation = ({ squarePropsArr, currentPlayer }: Props) => {
  return (
    <div className="board">
      {squarePropsArr.map((row, i) => (
        <div key={`row:${i}`} className='board__row'>
          {row.map((state, j) => (
            <Square key={`row:${i}-col:${j}`} isSet={state.isSet} player={state.player} />
          ))}
        </div>
      ))}
    </div>
  )
}