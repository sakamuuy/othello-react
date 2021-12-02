import { Presentation } from "./Board"
import { useBoard } from "./useBoard"

export const Board = () => {
  const props = useBoard()
  return <Presentation {...props} />
}