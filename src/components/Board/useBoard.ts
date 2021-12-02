import { useEffect, useState } from "react"
import { Props } from './Board'

const arr8 = Array(8).fill(0)
export const useBoard = (): Props => {
  const [currentPlayer, setCurrentPlayer] = useState<Props['currentPlayer']>('Player1')
  const [squarePropsArr, setSquarePropsArr] = useState<Props['squarePropsArr']>(arr8.map(() => arr8.map(() => ({isSet: false}))))

  useEffect(() => {
    setSquarePropsArr(() => (
      squarePropsArr.map((row,i) => (
        row.map((s, j) => {
          if ((i === 3 && j === 3) || (i === 4 && j === 4)) {
            return {
              isSet: true,
              player: 'Player1'
            }
          } else if ((i === 3 && j === 4) || (i === 4 && j === 3)) {
            return {
              isSet: true,
              player: 'Player2'
            }
          }
          return s
        })
      ))
    ))
  }, [])

  return {
    squarePropsArr,
    currentPlayer
  }
}