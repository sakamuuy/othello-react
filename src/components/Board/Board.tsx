import { Square } from '../Square'
import './index.css'

const arr8len = Array(8).fill(0)
export const Presentation = () => {
  return (
    <div className="board">
      {arr8len.map((_, i) => (
        <div key={`row:${i}`} className='board__row'>
          {arr8len.map((_, j) => (
            <Square key={`row:${i}-col:${j}`} />
          ))}
        </div>
      ))}
    </div>
  )
}