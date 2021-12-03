import { useCallback, useEffect, useState } from "react"
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

  type AroundState = {
    isSet: Props["squarePropsArr"][number][number]["isSet"]
    player?: Props["squarePropsArr"][number][number]["player"]
    row: number
    col: number
  }

  // Return null when the result is out of the board
  const getNormalizedState = (row:number, col:number): AroundState | null => {
    return (row < 0 || row > 7 || col < 0 || col > 7 )? 
      {
        ...squarePropsArr[row][col],
        row,
        col
      } : null
  }

  const getAroundEnemiesDiscs = (row: number, col: number) => {
    const arroundStatus = [
      getNormalizedState(row - 1, col - 1),
      getNormalizedState(row - 1, col),
      getNormalizedState(row - 1, col + 1),
      getNormalizedState(row, col - 1),
      getNormalizedState(row, col + 1),
      getNormalizedState(row + 1, col -1),
      getNormalizedState(row + 1, col),
      getNormalizedState(row + 1, col + 1),
    ]
    return arroundStatus.filter((status): status is NonNullable<AroundState> => status !== null && status?.isSet && status.player !== currentPlayer)
  }

  const getCanSandwitchDiscs = (row: number, col: number, foundEnemieDisc: AroundState): AroundState[] => {
    const xDir = foundEnemieDisc.col - col
    const yDir = foundEnemieDisc.row - row
    let nextX = col + xDir
    let nextY = col + yDir 
    const canSandwitchDiscs: AroundState[] = []

    while (1) {
      const nextDirDisc = getNormalizedState(nextY, nextX)
      if (nextDirDisc !== null && nextDirDisc.isSet && nextDirDisc.player !== currentPlayer) {
        canSandwitchDiscs.push(nextDirDisc)
        nextX += xDir
        nextY += yDir
      } else {
        break
      }
    }

    return canSandwitchDiscs
  }

  const onClickSquare = useCallback((row: number, col: number) => {
    const aroundEnemiesDiscs: AroundState[] = getAroundEnemiesDiscs(row, col)
    if (aroundEnemiesDiscs.length === 0) return;

    const canSandwitchDiscs = aroundEnemiesDiscs.map((disc) => getCanSandwitchDiscs(row, col, disc))
    

  }, [squarePropsArr, setSquarePropsArr])

  return {
    squarePropsArr,
    currentPlayer,
    onClickSquare
  }
}