import { Square, Props as SquareProps } from '../Square'
import './index.css'

export type Props = {
  squarePropsArr: Pick<SquareProps, 'isSet' | 'player'>[][]
  currentPlayer: SquareProps['player']
  onClickSquare: SquareProps['onClickSquare']
}

export const Presentation = ({ squarePropsArr, currentPlayer, onClickSquare }: Props) => {
  return (
    <div className="board">
      {squarePropsArr.map((row, i) => (
        <div key={`row:${i}`} className='board__row'>
          {row.map((state, j) => (
            <Square 
              key={`row:${i}-col:${j}`} 
              isSet={state.isSet} 
              player={state.player}
              onClickSquare={onClickSquare}
              row={i}
              col={j} />
          ))}
        </div>
      ))}
    </div>
  )
}