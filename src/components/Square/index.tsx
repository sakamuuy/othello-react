import { Presentation } from "./Square"

export type Props = {
  isSet: boolean
  player?: 'Player1' | 'Player2'
}

export const Square = (props: Props) => {
  return (
    <Presentation {...props} />
  )
}