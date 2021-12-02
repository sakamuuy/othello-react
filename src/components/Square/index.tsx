import { Presentation } from "./Square"

export type Props = {
  isSet: boolean
  player?: 'Player1' | 'Player2'
  onClickSquare: (row:number, col:number) => void
  row: number
  col: number
}

export const Square = (props: Props) => {
  return (
    <Presentation {...props} />
  )
}