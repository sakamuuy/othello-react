import type { Props } from '.'
import './index.css'

export const Presentation = ({ isSet, player, onClickSquare, row, col }: Props) => {
  return (
    <div className="square" onClick={() => onClickSquare(row, col)}>
      {isSet? player === "Player1"? 'black' : 'white' : null}
    </div>
  )
}