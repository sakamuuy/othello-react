import type { Props } from '.'
import './index.css'

type DiscProps = {
  color: 'black' | 'white'
}
const Disc = ({ color }: DiscProps) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: color,
      }}
    >
    </div>
  )
}

export const Presentation = ({ isSet, player, onClickSquare, row, col }: Props) => {
  return (
    <div className="square" onClick={() => onClickSquare(row, col)}>
      {isSet? player === "Player1"? <Disc color="black" /> : <Disc color='white' /> : null}
    </div>
  )
}