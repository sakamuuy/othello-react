import type { Props } from '.'
import './index.css'

export const Presentation = ({ isSet, player }: Props) => {
  return (
    <div className="square">
      {isSet? player === "Player1"? 'black' : 'white' : null}
    </div>
  )
}